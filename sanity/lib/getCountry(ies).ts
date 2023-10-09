import firstLetterToUpperCase from "@/lib/firstLetterToUpperCase";

import { client } from "./client";

export async function getCountries(continent: string): Promise<Country[]> {
  const accurateContinent = firstLetterToUpperCase(continent, "-");

  return client.fetch(
    `*[_type == "country" && continent == '${accurateContinent}']{_id, name, "slug": slug.current, "picture": { "image": picture.asset->url, "alt": picture.alt }}`
  );
}

export async function getCountry(country: string): Promise<Country[]> {
  return client.fetch(
    `*[_type == "country" && slug.current == '${country}']{name, "flag": { "image": flag.asset->url, "alt": flag.alt }, "picture": { "image": picture.asset->url, "alt": picture.alt }, "coordinates": { "alt": location.alt, "lat": location.lat, "lon": location.lng }}`
  );
}
