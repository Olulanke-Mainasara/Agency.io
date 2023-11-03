import { LocationInfo } from "@/types/LocationInfo";

import { client } from "./client";

export async function getLocations(category: string): Promise<LocationInfo[]> {
  return client.fetch(
    `*[type == "location" && category == ${category}]{_id, name, "slug": slug.current, "displayImage": { "url": displayImage.asset->url, "alt": displayImage.alt}, rating}`
  );
}

export async function getLocation(location: string): Promise<LocationInfo[]> {
  return client.fetch(
    `*[type == "location" && slug.current == ${location}]{name, about, category, "pictures": pictures[]{ "url": picture.asset->url, "alt": picture.alt }, rating, address, contact, coordinates, reviews[]{_id, name, title, description, rating, "pictures": pictures[]{ "url": picture.asset->url, "alt": picture.alt }, date}, faqs[]{_id, question, answer}}`
  );
}
