export const location = {
  name: "location",
  type: "document",
  title: "Locations",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      description: "The name of the location",
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
      name: "about",
      type: "text",
      title: "About",
      description: "A description of the location",
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      description: "The category of services the location falls under",
    },
    {
      name: "pictures",
      type: "array",
      title: "Pictures",
      description: "Pictures of the location",
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
      description: "The overall rating of the location",
    },
    {
      name: "address",
      type: "string",
      title: "Address",
      description: "The address of the location",
    },
    {
      name: "contact",
      type: "object",
      title: "Contact",
      description: "The contact information of the location",
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
      name: "location",
      type: "geopoint",
      title: "Location",
      description: "The Geo-coordinates of the location",
    },
    {
      name: "reviews",
      type: "array",
      title: "Reviews",
      description: "The reviews of the location",
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
              description: "The reviewer's rating of the location",
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
                    "A picture taken by the reviewer at the location",
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
      description: "The Faqs of the location",
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
