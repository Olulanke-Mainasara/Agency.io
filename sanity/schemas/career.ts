export const career = {
  name: "career",
  type: "document",
  title: "Careers",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "The title of the career",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      description: "The category of the career",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "The description of the career",
    },
    {
      name: "location",
      type: "string",
      title: "Location",
      description: "The location of the career (Remote, Onsite, Hybrid)",
    },
    {
      name: "type",
      type: "string",
      title: "Type",
      description: "The type of the career (Full-time, Part-time, Contract)",
    },
    {
      name: "pay",
      type: "string",
      title: "Pay",
      description: "The pay of the career",
    },
  ],
};
