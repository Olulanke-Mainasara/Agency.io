const WIKIPEDIA_SUMMARY_API =
  "https://en.wikipedia.org/api/rest_v1/page/summary";
const USER_AGENT =
  "Agency.io-seed-script/1.0 (content sourcing for a travel site; run locally, non-commercial dev use)";

export type WikipediaSummary = {
  title: string;
  description: string;
  imageUrl: string | null;
  coordinates: { lat: number; lon: number } | null;
};

export async function fetchWikipediaSummary(
  title: string
): Promise<WikipediaSummary> {
  const response = await fetch(
    `${WIKIPEDIA_SUMMARY_API}/${encodeURIComponent(title.replace(/ /g, "_"))}`,
    { headers: { "User-Agent": USER_AGENT } }
  );

  if (!response.ok) {
    throw new Error(
      `Wikipedia summary fetch failed for "${title}": ${response.status}`
    );
  }

  const data = await response.json();

  return {
    title: data.title,
    description: data.extract,
    imageUrl: data.originalimage?.source ?? data.thumbnail?.source ?? null,
    coordinates: data.coordinates
      ? { lat: data.coordinates.lat, lon: data.coordinates.lon }
      : null,
  };
}
