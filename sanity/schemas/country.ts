export const country = {
  name: "country",
  type: "document",
  title: "Countries",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      description: "The name of the country",
    },
    {
      name: "flag",
      type: "image",
      title: "Flag",
      description: "The country's flag",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt" }],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "A description of the country",
    },
    {
      name: "continent",
      type: "string",
      title: "Continental Region",
      description: "The continent the country belongs to",
    },
    {
      name: "pictures",
      type: "array",
      title: "Pictures",
      description: "Snapshots of the country",
      of: [
        {
          type: "image",
          title: "Picture",
          description: "A snapshot of the country",
          options: { hotspot: true },
          fields: [{ name: "alt", type: "string", title: "Alt" }],
        },
      ],
    },
    {
      name: "essentials",
      type: "array",
      title: "Essentials",
      description: "A list of essential things that the country offers",
      of: [
        {
          name: "essential",
          type: "object",
          title: "Essential",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
              description: "Title of the essential",
            },
            {
              name: "description",
              type: "string",
              title: "Description",
              description: "A short description of the essential",
            },
            {
              name: "locations",
              type: "array",
              title: "Locations",
              of: [
                {
                  title: "Location",
                  type: "reference",
                  description: "A location that offers the above essential",
                  to: [{ type: "location" }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "destinations",
      type: "array",
      title: "Destinations",
      description: "A list of some recommended destinations",
      of: [
        {
          name: "destination",
          type: "image",
          title: "Destination",
          fields: [
            { name: "alt", type: "string", title: "Alt" },
            { name: "name", type: "string", title: "Name" },
          ],
        },
      ],
    },
    {
      name: "whyWeLove",
      type: "array",
      title: "Why we love",
      description: "Some special things or services the country has",
      of: [
        {
          name: "reason",
          type: "object",
          title: "Reason",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
              description: "The reason title",
            },
            {
              name: "locations",
              type: "array",
              title: "Locations",
              of: [
                {
                  title: "Location",
                  type: "reference",
                  description: "A location that supports the reason",
                  to: [{ type: "location" }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "location",
      type: "geopoint",
      title: "Location",
      description: "The Geo-coordinates of the country",
    },
  ],
};
