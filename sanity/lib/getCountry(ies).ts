import { Country } from "@/types/Country";
import firstLetterToUpperCase from "@/lib/firstLetterToUpperCase";

import { client } from "./client";

export async function getCountries(continent: string): Promise<Country[]> {
  const accurateContinent = firstLetterToUpperCase(continent, "-");

  return client.fetch(
    `*[_type == "country" && continent == '${accurateContinent}']{_id, name, "slug": slug.current, "displayImage": { "url": displayImage.asset->url, "alt": displayImage.alt }}`
  );
}

export async function getCountry(country: string): Promise<Country[]> {
  return client.fetch(
    `*[_type == "country" && slug.current == '${country}']{name, "flag": { "url": flag.asset->url, "alt": flag.alt }, "displayImage": { "url": displayImage.asset->url, "alt": displayImage.alt }, description, continent, "pictures": pictures[]{ "url": asset->url, "alt": alt }, essentials[]{_key, title, description, establishments[]->{_id, name, "slug": slug.current, "displayImage": { "url": displayImage.asset->url, "alt": displayImage.alt}, rating}}, destinations[]->{_id, name, "slug": slug.current, "displayImage": { "url": displayImage.asset->url, "alt": displayImage.alt}, description}, posts[]->{_id, title, "slug": slug.current, "image": { "url": image.asset->url, "alt": image.alt }, description}, whyWeLove[]{_key, title, establishments[]->{_id, name, "slug": slug.current, "displayImage": { "url": displayImage.asset->url, "alt": displayImage.alt}, rating}}, coordinates, faqs[]{_key, question, answer}}`
  );
}
