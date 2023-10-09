import { type SchemaTypeDefinition } from "sanity";

import { blog } from "./blog";
import { continent } from "./continent";
import { country } from "./country";
import { experience } from "./experience";
import { faq } from "./faq";
import { location } from "./location";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experience, continent, country, blog, faq, location],
};
