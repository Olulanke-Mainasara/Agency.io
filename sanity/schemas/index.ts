import { type SchemaTypeDefinition } from "sanity";

import { locations } from "./locations";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [locations],
};
