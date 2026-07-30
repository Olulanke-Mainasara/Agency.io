import { EstablishmentInfo } from "@/types/EstablishmentInfo";

import { client } from "./client";

export async function getEstablishments(
  category: string
): Promise<EstablishmentInfo[]> {
  return client.fetch(
    `*[_type == "establishment" && category == '${category}']{_id, name, "slug": slug.current, "displayImage": { "url": displayImage.asset->url, "alt": displayImage.alt}, rating, priceLevel}`
  );
}

export async function getEstablishment(
  location: string
): Promise<EstablishmentInfo[]> {
  return client.fetch(
    `*[_type == "establishment" && slug.current == '${location}']{_id, name, "slug": slug.current, "displayImage": { "url": displayImage.asset->url, "alt": displayImage.alt}, about, continent, country, place, category, "pictures": pictures[]{ "url": picture.asset->url, "alt": picture.alt }, rating, priceLevel, address, contact, coordinates, faqs[]{_key, question, answer}}`
  );
}
