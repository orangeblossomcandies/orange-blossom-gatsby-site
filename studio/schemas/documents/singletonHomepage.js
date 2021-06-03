export default {
  title: "Home",
  name: "home",
  type: "document",
  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Subheading",
      name: "subheading",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Panel Image",
      name: "panelImage",
      type: "mainImage",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Text Body",
      name: "body",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
  ],
};
