const vet = {
  name: "vet",
  title: "Vets",
  type: "document",

  fields: [
    {
      name: "name",
      type: "string",
      title: "Vet name/ Establisment name",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "region",
      type: "string",
      title: "Choose a region for the vet clinic",
      initialValue: "",
      options: {
        list: [
          { title: "North", value: "north" },
          { title: "South", value: "south" },
          { title: "East", value: "east" },
          { title: "West", value: "west" },
          { title: "Center", value: "center" },
        ],
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "map_link",
      type: "url",
      title: "Google maps link",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "contact_email",
      title: "Contact Email",
      type: "email",
    },
    {
      name: "contact_tel",
      title: "Contact number",
      type: "number",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        },
      ],
    },
  ],
};

export default vet;
