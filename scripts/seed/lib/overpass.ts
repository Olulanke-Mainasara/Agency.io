const OVERPASS_API = "https://overpass-api.de/api/interpreter";

export type OsmEstablishmentCategory = "Hotel" | "Restaurant" | "Attraction";

export type OsmEstablishment = {
  name: string;
  category: OsmEstablishmentCategory;
  coordinates: { lat: number; lon: number };
  address: string | null;
  website: string | null;
  phone: string | null;
};

const CATEGORY_TAGS: {
  category: OsmEstablishmentCategory;
  key: string;
  value: string;
}[] = [
  { category: "Hotel", key: "tourism", value: "hotel" },
  { category: "Restaurant", key: "amenity", value: "restaurant" },
  { category: "Attraction", key: "tourism", value: "attraction" },
];

function buildAddress(tags: Record<string, string>): string | null {
  const parts = [
    tags["addr:housenumber"],
    tags["addr:street"],
    tags["addr:city"],
  ].filter(Boolean);

  return parts.length > 0 ? parts.join(" ") : null;
}

export async function fetchNearbyEstablishments(
  lat: number,
  lon: number,
  radiusMeters = 5000,
  perCategoryLimit = 20
): Promise<OsmEstablishment[]> {
  const filters = CATEGORY_TAGS.map(
    ({ key, value }) =>
      `  node["${key}"="${value}"](around:${radiusMeters},${lat},${lon});\n` +
      `  way["${key}"="${value}"](around:${radiusMeters},${lat},${lon});`
  ).join("\n");

  const query = `[out:json][timeout:25];\n(\n${filters}\n);\nout center ${
    perCategoryLimit * CATEGORY_TAGS.length
  };`;

  const response = await fetch(OVERPASS_API, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `data=${encodeURIComponent(query)}`,
  });

  if (!response.ok) {
    throw new Error(`Overpass query failed: ${response.status}`);
  }

  const data = await response.json();
  const results: OsmEstablishment[] = [];

  for (const element of data.elements ?? []) {
    const tags = element.tags ?? {};
    const name = tags.name;

    if (!name) {
      continue;
    }

    const category: OsmEstablishmentCategory | undefined =
      tags.tourism === "hotel"
        ? "Hotel"
        : tags.amenity === "restaurant"
          ? "Restaurant"
          : tags.tourism === "attraction"
            ? "Attraction"
            : undefined;

    if (!category) {
      continue;
    }

    const point =
      element.type === "node"
        ? { lat: element.lat, lon: element.lon }
        : element.center;

    if (!point) {
      continue;
    }

    results.push({
      name,
      category,
      coordinates: point,
      address: buildAddress(tags),
      website: tags.website ?? tags["contact:website"] ?? null,
      phone: tags.phone ?? tags["contact:phone"] ?? null,
    });
  }

  return results;
}
