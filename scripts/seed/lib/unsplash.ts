const UNSPLASH_SEARCH_API = "https://api.unsplash.com/search/photos";

export async function fetchUnsplashPhoto(
  query: string
): Promise<string | null> {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;

  if (!accessKey) {
    return null;
  }

  const response = await fetch(
    `${UNSPLASH_SEARCH_API}?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
    { headers: { Authorization: `Client-ID ${accessKey}` } }
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data.results?.[0]?.urls?.regular ?? null;
}
