export const experience = {
  name: "experience",
  type: "document",
  title: "Experiences",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      description: "The name of the experience",
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
      description: "The display image of the experience",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt" }],
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      description: "A short description of the experience",
    },
    {
      name: "top10",
      type: "array",
      title: "Top 10",
      description: "The top 10 establishments that offer this experience",
      of: [
        {
          name: "establishment",
          type: "reference",
          title: "Establishment",
          description: "Select an establishment",
          to: [{ type: "establishment" }],
        },
      ],
    },
    {
      name: "sections",
      type: "array",
      title: "Sections",
      of: [
        {
          name: "section",
          type: "object",
          title: "Section",
          description: "A section to be featured on the experience page.",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
              description: "Title of the section",
            },
            {
              name: "establishments",
              type: "array",
              title: "Establishments that offer this section of the experience",
              of: [
                {
                  name: "establishment",
                  type: "reference",
                  title: "Establishment",
                  description: "Select an establishment",
                  to: [{ type: "establishment" }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
