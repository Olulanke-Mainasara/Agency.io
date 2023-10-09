export const continent = {
  name: "continent",
  type: "document",
  title: "Continents",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      description: "The name of the continent",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "map",
      type: "image",
      title: "Map",
      description: "The map of the continent",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt" }],
    },
  ],
};
