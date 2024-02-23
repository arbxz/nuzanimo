const taxi = {
  name: "taxi",
  title: "Taxis",
  type: "document",

  fields: [
    {
      name: "name",
      type: "string",
      title: "Taxi name/ Establisment name",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "region",
      type: "string",
      title: "Choose a region the taxi operates in",
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
      name: "contact_email",
      title: "Contact Email",
      type: "email",
    },
    {
      name: "contact_tel",
      title: "Contact number",
      type: "number",
    },
  ],
};

export default taxi;
