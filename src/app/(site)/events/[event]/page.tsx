import { getEvent } from "../../../../../sanity/sanity-utils";

type Props = {
  params: {
    event: string;
  };
};

const NgoEventDetails = async ({ params }: Props) => {
  const slug = params.event;
  const adoption = await getEvent(slug);
  const publishedDate = new Date(adoption._createdAt);
  const formattedDate = publishedDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return <div>test</div>;
};

export default NgoEventDetails;
