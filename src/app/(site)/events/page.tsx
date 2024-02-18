import Image from "next/image";
import Link from "next/link";
import { getEvents } from "../../../../sanity/sanity-utils";
import { ngoEvent } from "../../../../types/Event";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faHashtag,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";

export default async function NgoEvent() {
  const ngoEvents: ngoEvent[] = await getEvents();

  return (
    <section className="bg-pastel-dark noise">
      <Image
        src="/blob-haikei.svg"
        alt="bg-main"
        className="absolute block inset-0 w-auto h-full object-contain z-0"
        width={1920}
        height={1080}
      />

      <div className="relative w-full pt-16 lg:pt-24 px-4 pb-8 text-white z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className=" flex items-center gap-4 text-6xl font-bold mb-4">
            <FontAwesomeIcon className="text-primary" icon={faHashtag} />
            Event Hosted by our Community
          </h1>
          <p className="lg:max-w-lg">
            From adoption events to sterilisation campaigns, our community is
            always on the move. Join us in our mission to make a difference in
            the lives of our furry friends.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col gap-8 lg:gap-16 justify-start items-center px-4 py-16 max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ngoEvents.map((ngoEvent) => (
            //  href={`/events/${ngoEvent.slug}`}
            <div
              className="group bg-pure-white overflow-hidden shadow hover:shadow-md px-2 py-4 rounded-md transition-shadow cursor-pointer"
              key={ngoEvent._id}>
              {ngoEvent.image && (
                <div className="flex gap-4 overflow-hidden">
                  <Image
                    src={ngoEvent.image}
                    alt={ngoEvent.name}
                    width={150}
                    height={150}
                    placeholder="blur"
                    blurDataURL={ngoEvent.image}
                    className="object-cover"
                  />
                  <div className="border-l-2 border-dashed border-l-pastel-dark pl-4">
                    <span className="text-sm font-semibold">
                      {ngoEvent.event_date?.toString()}
                    </span>
                    <h4 className="font-semibold text-xl mb-3">
                      {ngoEvent.name}
                    </h4>
                    <p>{ngoEvent.description}</p>
                    <p className="my-2">
                      <FontAwesomeIcon className="mr-2" icon={faLocationPin} />
                      {ngoEvent.location}
                    </p>
                    <a
                      className="inline-block border-2 border-primary px-4 py-1 rounded hover:text-primary hover:bg-pure-white bg-primary text-white transition-all duration-300 ease-in-out"
                      href={ngoEvent.event_link}>
                      <FontAwesomeIcon className="mr-2" icon={faCalendarAlt} />{" "}
                      add to your calendar.
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
