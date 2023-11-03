import { type SchemaTypeDefinition } from "sanity";

import { blog } from "./blog";
import { country } from "./country";
import { experience } from "./experience";
import { location } from "./location";
import { place } from "./place";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experience, country, place, blog, location],
};
