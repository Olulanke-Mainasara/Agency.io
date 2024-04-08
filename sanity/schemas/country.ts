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
      name: "displayImage",
      type: "image",
      title: "Display Image",
      description: "The display image of the country",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt" }],
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
              name: "establishments",
              type: "array",
              title: "Establishments",
              of: [
                {
                  title: "Location",
                  type: "reference",
                  description:
                    "An establishment that offers the above essential",
                  to: [{ type: "establishment" }],
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
      description: "A list of some popular destinations in the country",
      of: [
        {
          name: "destination",
          type: "reference",
          title: "Destination",
          to: [{ type: "place" }],
        },
      ],
    },
    {
      name: "posts",
      type: "array",
      title: "Posts",
      description: "A list of some blog posts about this place",
      of: [
        {
          type: "reference",
          title: "Post",
          description: "A post about this place",
          to: [{ type: "blog" }],
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
              name: "establishments",
              type: "array",
              title: "",
              of: [
                {
                  title: "Location",
                  type: "reference",
                  description: "An establishment that supports the reason",
                  to: [{ type: "establishment" }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "coordinates",
      type: "geopoint",
      title: "Coordinates",
      description: "The Geo-coordinates of the country",
    },
    {
      name: "faqs",
      type: "array",
      title: "Faqs",
      description: "The Faqs of the country",
      of: [
        {
          type: "object",
          title: "Faq",
          description: "A frequently asked question",
          fields: [
            {
              name: "question",
              type: "string",
              title: "Question",
              description: "The question asked",
            },
            {
              name: "answer",
              type: "string",
              title: "Answer",
              description: "The answer to the question asked",
            },
          ],
        },
      ],
    },
  ],
};
