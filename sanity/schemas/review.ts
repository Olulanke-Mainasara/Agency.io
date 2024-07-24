export const review = {
  name: "review",
  type: "document",
  title: "Reviews",
  fields: [
    {
      name: "firstName",
      type: "string",
      title: "First name",
      description: "The first name of the reviewer",
    },
    {
      name: "lastName",
      type: "string",
      title: "Last name",
      description: "The last name of the reviewer",
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
};
