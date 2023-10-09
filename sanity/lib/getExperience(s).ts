import { client } from "./client";

export async function getExperiences(): Promise<Experience[]> {
  return client.fetch(
    `*[_type == "experience"]{_id, name, "slug": slug.current, description}`
  );
}

export async function getExperience(experience: string): Promise<Experience[]> {
  return client.fetch(
    `*[_type == "experience" && slug.current == '${experience}']`
  );
}
