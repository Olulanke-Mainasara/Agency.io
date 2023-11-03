export const place = {
  name: "place",
  type: "document",
  title: "States and Cities",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      description: "The name of the place",
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
      description: "The display image of the place",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt" }],
    },
    {
      name: "country",
      type: "string",
      title: "Country",
      description: "The country the place is located",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "A description of the place",
    },
    {
      name: "pictures",
      type: "array",
      title: "Pictures",
      description: "Snapshots of the place",
      of: [
        {
          type: "image",
          title: "Picture",
          description: "A snapshot of the place",
          options: { hotspot: true },
          fields: [{ name: "alt", type: "string", title: "Alt" }],
        },
      ],
    },
    {
      name: "essentials",
      type: "array",
      title: "Essentials",
      description: "A list of essential things that the place offers",
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
      description: "Some special things or services the place has",
      of: [
        {
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
    {
      name: "faqs",
      type: "array",
      title: "Faqs",
      description: "The Faqs of the place",
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
