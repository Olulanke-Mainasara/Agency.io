import { Blog } from "@/types/Blog";

import { client } from "./client";

export async function getBlog(): Promise<Blog[]> {
  return client.fetch(
    `*[_type == "blog"]{_id, title, "slug": slug.current, "image": { "url": image.asset->url, "alt": image.alt }, description}`
  );
}

export async function getPost(post: string): Promise<Blog[]> {
  return client.fetch(
    `*[_type == "blog" && slug.current == '${post}']{_id, title, "slug": slug.current, "image": { "url": image.asset->url, "alt": image.alt }, description, content[]}`
  );
}
