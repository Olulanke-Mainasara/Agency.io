import { Experience } from "@/types/Experience";

import { client } from "./client";

export async function getExperiences(): Promise<Experience[]> {
  return client.fetch(
    `*[_type == "experience"]{_id, name, "slug": slug.current, "displayImage": {"url": displayImage.asset->url, "alt": displayImage.alt}, description}`
  );
}

export async function getExperience(experience: string): Promise<Experience[]> {
  return client.fetch(
    `*[_type == "experience" && slug.current == '${experience}']{_id, name, "slug": slug.current, "displayImage": {"url": displayImage.asset->url, "alt": displayImage.alt}, description, top10[]{_id, name, "slug": slug.current, "displayImage": {"url": displayImage.asset->url, "alt": displayImage.alt}}, sections[]{_id, title, locations[]{_id, name, "slug": slug.current, "displayImage": { "url": displayImage.asset->url, "alt": displayImage.alt}, rating}}}`
  );
}
