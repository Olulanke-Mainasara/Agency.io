export const establishment = {
  name: "establishment",
  type: "document",
  title: "Establishments",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      description: "The name of the establishment",
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
      description: "The display image of the establishment",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt" }],
    },
    {
      name: "about",
      type: "text",
      title: "About",
      description: "A description of the establishment",
    },
    {
      name: "continent",
      type: "string",
      title: "Continent",
      description: "The continent the establishment is located",
    },
    {
      name: "country",
      type: "string",
      title: "Country",
      description: "The country the establishment is located",
    },
    {
      name: "place",
      type: "string",
      title: "Place",
      description: "The city the establishment is located",
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      description: "The category of services the establishment falls under",
    },
    {
      name: "pictures",
      type: "array",
      title: "Pictures",
      description: "Pictures of the establishment",
      of: [
        {
          name: "picture",
          type: "image",
          title: "Picture",
          options: { hotspot: true },
          fields: [{ name: "alt", type: "string", title: "Alt" }],
        },
      ],
    },
    {
      name: "rating",
      type: "number",
      title: "Rating",
      description: "The overall rating of the establishment",
    },
    {
      name: "address",
      type: "string",
      title: "Address",
      description: "The address of the establishment",
    },
    {
      name: "contact",
      type: "object",
      title: "Contact",
      description: "The contact information of the establishment",
      fields: [
        {
          title: "Website",
          name: "website",
          type: "url",
        },
        {
          title: "Phone Number",
          name: "telephone",
          type: "number",
        },
        {
          title: "Email",
          name: "email",
          type: "string",
        },
      ],
    },
    {
      name: "coordinates",
      type: "geopoint",
      title: "Coordinates",
      description: "The Geo-coordinates of the establishment",
    },
    {
      name: "reviews",
      type: "array",
      title: "Reviews",
      description: "The reviews of the establishment",
      of: [
        {
          name: "review",
          type: "object",
          title: "Review",
          fields: [
            {
              name: "name",
              type: "string",
              title: "Name",
              description: "The name of the reviewer",
            },
            {
              name: "title",
              type: "string",
              title: "Title",
              description: "The title of the review",
            },
            {
              name: "description",
              type: "text",
              title: "Description",
              description: "The reviewer's experience",
            },
            {
              name: "rating",
              type: "number",
              title: "Rating",
              description: "The reviewer's rating of the establishment",
            },
            {
              name: "pictures",
              type: "array",
              title: "Pictures",
              description: "Pictures taken by the reviewer",
              of: [
                {
                  name: "picture",
                  type: "image",
                  title: "Picture",
                  description:
                    "A picture taken by the reviewer at the establishment",
                  fields: [{ name: "alt", type: "string", title: "Alt" }],
                },
              ],
            },
            {
              name: "date",
              type: "date",
              title: "Date",
              description: "The date the review was written",
              options: {
                dateFormat: "MM-DD-YYYY",
                calendarTodayLabel: "Today",
              },
            },
          ],
        },
      ],
    },
    {
      name: "faqs",
      type: "array",
      title: "Faqs",
      description: "The Faqs of the establishment",
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
