import { type SchemaTypeDefinition } from "sanity";

import { blog } from "./blog";
import { country } from "./country";
import { establishment } from "./establishment";
import { experience } from "./experience";
import { place } from "./place";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experience, country, place, blog, establishment],
};
