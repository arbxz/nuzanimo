const adoption = {
  name: "adoption",
  title: "Adoptions",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name" },
      validation: (Rule: { required: () => any }) => Rule.required(),
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
    {
      name: "age",
      title: "Age",
      placeholder: "Kindly put (months old)/12 if less than a year",
      type: "number",
    },
    {
      name: "vaccinated",
      type: "string",
      title: "Is the animal vaccinated?",
      initialValue: "No",
      options: {
        list: [
          { title: "No", value: "no" },
          { title: "Yes", value: "yes" },
        ],
      },
    },
    {
      name: "neutered",
      type: "string",
      title: "Is the animal neutered?",
      initialValue: "No",
      options: {
        list: [
          { title: "No", value: "no" },
          { title: "Yes", value: "yes" },
        ],
      },
    },
    {
      name: "contact_url",
      title: "Contact URL",
      type: "url",
    },
    {
      name: "contact_number",
      title: "Contact Number",
      type: "number",
    },
    {
      name: "contact_email",
      title: "Contact Email",
      type: "email",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default adoption;
