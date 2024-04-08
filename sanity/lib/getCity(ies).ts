import { Place } from "@/types/Place";

import { client } from "./client";

export async function getCities(country: string): Promise<Place[]> {
  return client.fetch(
    `*[_type == "place" && country == '${country}']{_id, name, "slug": slug.current, country, "displayImage": { "url": displayImage.asset->url, "alt": displayImage.alt}}`
  );
}

export async function getCity(place: string): Promise<Place[]> {
  return client.fetch(
    `*[_type == "place" && slug.current == '${place}']{_id, name, "displayImage": { "url": displayImage.asset->url, "alt": displayImage.alt}, country, description, "pictures": pictures[]{ "url": picture.asset->url, "alt": picture.alt }, essentials[]{_id, title, description, establishments[]{_id, name, "slug": slug.current, "displayImage": { "url": displayImage.asset->url, "alt": displayImage.alt}, rating}}, whyWeLove[]{_id, title, establishments[]{_id, name, "slug": slug.current, "displayImage": { "url": displayImage.asset->url, "alt": displayImage.alt}, rating}}, coordinates, faqs[]{_id, question, answer}}`
  );
}
