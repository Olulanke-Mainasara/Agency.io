import { Service } from "@/types/Service";

import { client } from "./client";

export async function getServices(): Promise<Service[]> {
  return client.fetch(
    `*[_type == "service"]{_id, name, "slug": slug.current, "displayImage": {"url": displayImage.asset->url, "alt": displayImage.alt}, description}`
  );
}

export async function getService(service: string): Promise<Service[]> {
  return client.fetch(
    `*[_type == "service" && slug.current == '${service}']{_id, name, "slug": slug.current, "displayImage": {"url": displayImage.asset->url, "alt": displayImage.alt}, description, top10[]{_id, name, "slug": slug.current, "displayImage": {"url": displayImage.asset->url, "alt": displayImage.alt}}, sections[]{_id, title, establishments[]{_id, name, "slug": slug.current, "displayImage": { "url": displayImage.asset->url, "alt": displayImage.alt}, rating}}}`
  );
}
