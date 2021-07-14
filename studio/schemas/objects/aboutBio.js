export default {
  name: "aboutBio",
  type: "object",
  title: "Bio",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      description: "Founder, employee, or other role.",
    },
    {
      name: "image",
      title: "Selfie",
      type: "mainImage",
      description: "This photo will be displayed with your bio.",
    },
    {
      name: "body",
      title: "Bio Body",
      type: "bodyPortableText",
    },
  ],
};
