import { EstablishmentInfo } from "@/types/EstablishmentInfo";

import { client } from "./client";

export async function getEstablishments(
  category: string
): Promise<EstablishmentInfo[]> {
  return client.fetch(
    `*[type == "location" && category == ${category}]{_id, name, "slug": slug.current, "displayImage": { "url": displayImage.asset->url, "alt": displayImage.alt}, rating}`
  );
}

export async function getEstablishment(
  location: string
): Promise<EstablishmentInfo[]> {
  return client.fetch(
    `*[type == "location" && slug.current == ${location}]{name, "displayImage": { "url": displayImage.asset->url, "alt": displayImage.alt}, about, continent, country, place, category, "pictures": pictures[]{ "url": picture.asset->url, "alt": picture.alt }, rating, address, contact, coordinates, reviews[]{_id, name, title, description, rating, "pictures": pictures[]{ "url": picture.asset->url, "alt": picture.alt }, date}, faqs[]{_id, question, answer}}`
  );
}
