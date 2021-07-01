export default {
  title: "Menu",
  name: "menu",
  type: "document",
  fields: [
    {
      title: "Page Title",
      name: "title",
      type: "string",
    },

    {
      title: "Ice Cream Section Image",
      name: "iceCreamImage",
      type: "mainImage",
    },
    {
      title: "Flavor of the Month",
      name: "flavorOfTheMonth",
      type: "string",
    },
    {
      title: "Ice Cream Sizes",
      name: "iceCreamSizes",
      type: "array",
      description: "Add, delete, edit, and re-order ice cream sizes.",
      of: [{ type: "iceCreamSize" }],
    },
    {
      title: "Ice Cream Flavors",
      name: "iceCreamFlavors",
      type: "array",
      description: "Add, delete, edit, and re-order ice cream flavors.",
      of: [{ type: "string" }],
    },
    {
      title: "Milkshake Section Image",
      name: "shakeImage",
      type: "mainImage",
    },
    {
      title: "Milkshake Price",
      name: "shakePrice",
      type: "string",
    },
    {
      title: "Specialty Shake Price",
      name: "specialtyShakePrice",
      type: "string",
    },
    {
      title: "Specialty Shake Flavors",
      name: "shakeFlavors",
      type: "array",
      of: [{ type: "specialtyFlavor" }],
    },
    {
      title: "Sundae Section Image",
      name: "sundaeImage",
      type: "mainImage",
    },
    {
      title: "Specialty Sundae Price",
      name: "sundaePrice",
      type: "string",
    },
    {
      title: "Specialty Sundae Flavors",
      name: "sundaeFlavors",
      type: "array",
      of: [{ type: "specialtyFlavor" }],
    },
    {
      title: "Drink Section Image",
      name: "drinkImage",
      type: "mainImage",
    },
    {
      title: "Drink Varieties",
      name: "drinkVarieties",
      type: "array",
      of: [{ type: "drink" }],
    },
    {
      title: "Bottom Section Image",
      name: "bottomImage",
      type: "mainImage",
    },
    {
      title: "Bottom Section Heading",
      name: "bottomHeading",
      type: "string",
    },
    {
      title: "Bottom Section Subheading",
      name: "bottomSubheading",
      type: "string",
    },
    {
      title: "Bottom Section Text",
      name: "bottomText",
      type: "text",
    },
  ],
};
