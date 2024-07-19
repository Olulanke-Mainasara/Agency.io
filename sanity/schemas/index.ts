import { type SchemaTypeDefinition } from "sanity";

import { blog } from "./blog";
import { career } from "./career";
import { country } from "./country";
import { establishment } from "./establishment";
import { experience } from "./experience";
import { place } from "./place";
import { review } from "./review";
import { service } from "./service";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    experience,
    country,
    place,
    blog,
    service,
    establishment,
    review,
    career,
  ],
};
