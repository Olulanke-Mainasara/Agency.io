import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const DATA_DIR = path.join(__dirname, "..", "..", "sanity", "seed", "data");
const OUTPUT_PATH = path.join(
  __dirname,
  "..",
  "..",
  "sanity",
  "seed",
  "output.ndjson"
);

type SourcedGeo = { lat: number; lon: number };

type SourcedCountry = {
  name: string;
  slug: string;
  continent: string;
  description: string;
  imageUrl: string | null;
  coordinates: SourcedGeo | null;
};

type SourcedPlace = {
  name: string;
  slug: string;
  country: string;
  description: string;
  imageUrl: string | null;
  coordinates: SourcedGeo | null;
};

type SourcedEstablishment = {
  name: string;
  slug: string;
  category: string;
  continent: string;
  country: string;
  place: string;
  coordinates: SourcedGeo | null;
  address: string | null;
  contact: {
    website: string | null;
    telephone: string | null;
    email: string | null;
  };
  imageUrl: string | null;
};

type SourcedDestination = {
  country: SourcedCountry;
  place: SourcedPlace;
  establishments: SourcedEstablishment[];
};

function geopoint(coords: SourcedGeo | null) {
  return coords
    ? { _type: "geopoint", lat: coords.lat, lng: coords.lon }
    : undefined;
}

function image(url: string | null, alt: string) {
  return url
    ? { _type: "image", _sanityAsset: `image@${url}`, alt }
    : undefined;
}

function countryDoc(country: SourcedCountry) {
  return {
    _id: `country-${country.slug}`,
    _type: "country",
    name: country.name,
    slug: { _type: "slug", current: country.slug },
    continent: country.continent,
    description: country.description,
    displayImage: image(country.imageUrl, country.name),
    coordinates: geopoint(country.coordinates),
  };
}

function placeDoc(place: SourcedPlace) {
  return {
    _id: `place-${place.slug}`,
    _type: "place",
    name: place.name,
    slug: { _type: "slug", current: place.slug },
    country: place.country,
    description: place.description,
    displayImage: image(place.imageUrl, place.name),
    coordinates: geopoint(place.coordinates),
  };
}

function establishmentDoc(establishment: SourcedEstablishment) {
  return {
    _id: `establishment-${establishment.slug}`,
    _type: "establishment",
    name: establishment.name,
    slug: { _type: "slug", current: establishment.slug },
    continent: establishment.continent,
    country: establishment.country,
    place: establishment.place,
    category: establishment.category,
    address: establishment.address ?? undefined,
    contact: {
      website: establishment.contact.website ?? undefined,
      telephone: establishment.contact.telephone ?? undefined,
      email: establishment.contact.email ?? undefined,
    },
    coordinates: geopoint(establishment.coordinates),
    displayImage: image(establishment.imageUrl, establishment.name),
  };
}

async function main() {
  const files = (await readdir(DATA_DIR)).filter((file) =>
    file.endsWith(".json")
  );

  if (files.length === 0) {
    console.error(
      `No sourced data found in ${DATA_DIR}. Run "npm run seed:source" first.`
    );
    process.exitCode = 1;
    return;
  }

  const documents: unknown[] = [];
  const seenCountrySlugs = new Set<string>();

  for (const file of files) {
    const destination: SourcedDestination = JSON.parse(
      await readFile(path.join(DATA_DIR, file), "utf-8")
    );

    if (!seenCountrySlugs.has(destination.country.slug)) {
      seenCountrySlugs.add(destination.country.slug);
      documents.push(countryDoc(destination.country));
    }

    documents.push(placeDoc(destination.place));
    documents.push(...destination.establishments.map(establishmentDoc));
  }

  const ndjson = documents.map((doc) => JSON.stringify(doc)).join("\n");
  await writeFile(OUTPUT_PATH, ndjson);

  console.log(`Wrote ${documents.length} documents to ${OUTPUT_PATH}`);
  console.log(
    "Import with: npx sanity dataset import sanity/seed/output.ndjson <dataset-name> --replace"
  );
}

main();
