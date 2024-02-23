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
    <section>
      {/* <Image
        src="/blob-haikei.svg"
        alt="bg-main"
        className="absolute block inset-0 w-auto h-full object-contain z-0"
        width={1920}
        height={1080}
      /> */}

      <div className="relative w-full pt-16 lg:pt-24 px-4 pb-16 bg-pastel-dark text-white z-10">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block font-semibold text-xs border-[1px] border-white text-white px-4 py-2 rounded-full mb-4 hover:bg-white hover:text-pastel-dark transition-colors duration-300">
            animal welfare and community.
          </span>
          <h1 className=" flex items-center gap-4 text-4xl lg:text-6xl font-bold mb-8">
            <FontAwesomeIcon icon={faHashtag} />
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          {ngoEvents.length > 0 ? (
            ngoEvents.map((ngoEvent) => (
              <div
                className="group bg-pure-white overflow-hidden shadow hover:shadow-md px-4 py-4 rounded-md transition-shadow cursor-pointer"
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
                      className="hidden md:block object-cover rounded-md"
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
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={faLocationPin}
                        />
                        {ngoEvent.location}
                      </p>
                      <a
                        className="inline-block border-2 border-primary px-4 py-1 rounded hover:text-primary hover:bg-pure-white bg-primary text-pure-white transition-all duration-300 ease-in-out"
                        href={ngoEvent.event_link}>
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={faCalendarAlt}
                        />{" "}
                        Add to your calendar.
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-3xl text-center text-white">No events found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
