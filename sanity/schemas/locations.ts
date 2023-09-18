export const locations = {
  name: "location",
  type: "document",
  title: "Location",
  fields: [
    {
      name: "continent",
      type: "string",
      title: "Continent",
    },
    {
      name: "countries",
      type: "array",
      title: "Countries",
      of: [
        {
          name: "country",
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Country" },
            { name: "flag", type: "image", title: "Flag" },
            { name: "picture", type: "image", title: "Picture" },
            { name: "location", type: "geopoint", title: "Location" },
          ],
        },
      ],
    },
  ],
};
