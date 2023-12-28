import { EstablishmentInfo } from "@/types/EstablishmentInfo";

import { client } from "./client";

export async function getNearby(
  experience: string,
  longitude: number,
  latitude: number
): Promise<EstablishmentInfo[]> {
  return client.fetch(
    `*[_type == "experience" && slug.current == '${experience}']{ _id, name, "slug": slug.current, "picture": { "url": picture.asset->url, "alt": picture.alt }}`
  );
}
