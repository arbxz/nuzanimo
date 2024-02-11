import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import { getAdoption } from "../../../../../sanity/sanity-utils";
import { calcAge } from "@/app/utils";
import {
  faCheckCircle,
  faCircleXmark,
  faEnvelope,
  faLink,
  faMailReply,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  params: {
    adoption: string;
  };
};

export default async function Adoption({ params }: Props) {
  const slug = params.adoption;
  const adoption = await getAdoption(slug);
  const publishedDate = new Date(adoption._createdAt);
  const formattedDate = publishedDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-4 items-start justify-between mb-8">
        <div className="flex flex-col gap-4 order-2 lg:order-1">
          <span className="text-sm opacity-70">
            Published on {formattedDate}
          </span>
          <h1 className="font-bold text-6xl capitalize">{adoption.name}</h1>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="flex gap-2 items-center rounded-full border-2 px-2 py-1">
              {adoption.neutered === "yes" ? (
                <FontAwesomeIcon icon={faCheckCircle} />
              ) : (
                <FontAwesomeIcon icon={faCircleXmark} />
              )}
              Neutered
            </span>
            <span className="flex gap-2 items-center rounded-full border-2 px-2 py-1">
              {adoption.vaccinated === "yes" ? (
                <FontAwesomeIcon icon={faCheckCircle} />
              ) : (
                <FontAwesomeIcon icon={faCircleXmark} />
              )}
              Vaccinated
            </span>
          </div>
          <span className="opacity-70 text-base">
            Age : {calcAge(adoption.age)}
          </span>
          <span>This animal is situated at {adoption.location}</span>
          <div className="flex gap-4 flex-wrap">
            {adoption.contact_url && (
              <Link
                className="flex items-center gap-4 w-fit px-4 border-2 border-white py-2 rounded-full text-white bg-black hover:bg-white hover:text-black hover:border-black transition-all duration-300 ease-in-out"
                href={adoption.contact_url}
                target="_blank">
                <FontAwesomeIcon icon={faLink} />
                Link to association
              </Link>
            )}

            {adoption.contact_number && (
              <Link
                href={"tel:" + adoption.contact_number}
                target="_blank"
                className="flex items-center gap-4 w-fit px-4 border-2 border-white py-2 rounded-full text-white bg-black hover:bg-white hover:text-black hover:border-black transition-all duration-300 ease-in-out">
                <FontAwesomeIcon icon={faPhone} />
                {adoption.contact_number}
              </Link>
            )}

            {adoption.contact_email && (
              <Link
                href={"mailto:" + adoption.contact_email}
                target="_blank"
                className="flex items-center gap-4 w-fit px-4 border-2 border-white py-2 rounded-full text-white bg-black hover:bg-white hover:text-black hover:border-black transition-all duration-300 ease-in-out">
                <FontAwesomeIcon icon={faEnvelope} />
                {adoption.contact_email}
              </Link>
            )}
          </div>
          <div className="max-w-xl text-xl mb-4">
            <PortableText value={adoption.content} />
          </div>
        </div>
        <Image
          className="flex-1 order-1 lg:order-2 rounded-lg shadow-md w-full h-96 object-cover lg:w-auto"
          src={adoption.image}
          alt={adoption.name}
          width={500}
          height={500}
          placeholder="blur"
          blurDataURL={adoption.image}
        />
      </div>
    </div>
  );
}
