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
      name: "description",
      title: "Description",
      type: "string",
      description: "A short description of the experience",
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
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
              description: "Title of the section",
            },
            {
              name: "images",
              type: "array",
              title: "Images",
              of: [
                {
                  title: "Image",
                  type: "image",
                  description: "A section image",
                  options: { hotspot: true },
                  fields: [
                    { name: "alt", type: "string", title: "Alt" },
                    { name: "caption", type: "string", title: "Caption" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
