export default {
  title: "Store Info",
  name: "info",
  type: "document",
  fields: [
    {
      title: "Address",
      name: "address",
      type: "text",
    },
    {
      title: "Phone",
      name: "phone",
      type: "string",
    },
    {
      title: "Email",
      name: "email",
      type: "string",
    },
    {
      title: "Store Hours",
      name: "hours",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
