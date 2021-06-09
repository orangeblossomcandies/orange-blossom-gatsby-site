export default {
  title: "Home",
  name: "home",
  type: "document",
  fields: [
    {
      title: "Blue Section Heading",
      name: "heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Blue Section Subheading",
      name: "subheading",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Blue Section Image",
      name: "panelImage",
      type: "mainImage",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Blue Section Text Body",
      name: "body",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Yellow Section Heading",
      name: "yellowHeading",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Yellow Section Subheading",
      name: "yellowSubheading",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Yellow Section Image",
      name: "yellowImage",
      type: "mainImage",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Yellow Section Text Body",
      name: "yellowBody",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
  ],
};
