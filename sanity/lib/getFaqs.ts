import { client } from "./client";

export async function getFaqs(): Promise<Faq[]> {
  return client.fetch(`*[_type == "faq"]{_id, question, answer}`);
}
