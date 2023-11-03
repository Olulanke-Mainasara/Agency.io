import { LocationInfo } from "@/types/LocationInfo";

import { client } from "./client";

export async function getNearbyLocations(
  experience: string,
  longitude: number,
  latitude: number
): Promise<LocationInfo[]> {
  return client.fetch(
    `*[_type == "experience" && slug.current == '${experience}']{ _id, name, "slug": slug.current, "picture": { "url": picture.asset->url, "alt": picture.alt }}`
  );
}
