import { ngoEvent } from "@/types/Event";
import { sanityFetch } from "../../../../../sanity/config/client-config";
import { getEvent } from "../../../../../sanity/sanity-utils";
import { singleEventQuery } from "../../../../../sanity/sanity.query";

type Props = {
  params: {
    event: string;
  };
};

const NgoEventDetails = async ({ params }: Props) => {
  const slug = params.event;
  const ngoEvent: ngoEvent = await sanityFetch({
    query: singleEventQuery,
    tags: ["event"],
    qParams: { slug: slug }, // add slug from next-js params
  });

  const publishedDate = new Date(ngoEvent._createdAt);
  const formattedDate = publishedDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return <div>test</div>;
};

export default NgoEventDetails;
