const event = {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Event Name",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "description",
      type: "string",
      title: "Event Description",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "event_date",
      type: "datetime",
      title: "Event Date and Time",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "event_link",
      type: "url",
      title: "Google calendar link",
      validation: (Rule: { required: () => any }) => Rule.required(),
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

export default event;
