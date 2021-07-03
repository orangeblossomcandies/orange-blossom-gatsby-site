export default {
  title: "About",
  name: "about",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Biographies",
      name: "bios",
      type: "array",
      of: [
        {
          type: "aboutBio",
        },
      ],
    },
  ],
};
