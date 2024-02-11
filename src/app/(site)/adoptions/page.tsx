import Image from "next/image";
import Link from "next/link";
import { getAdoptions } from "../../../../sanity/sanity-utils";
import { Adoption } from "../../../../types/Adoption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faLocationPin,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { calcAge } from "@/app/utils";

export default async function Adoptions() {
  const adoptions: Adoption[] = await getAdoptions();

  return (
    <div className="flex flex-col gap-8 lg:gap-16 justify-start items-center p-4 lg:p-24 max-w-6xl mx-auto">
      <div className="w-full">
        <h1 className="text-6xl font-bold mb-4">Adoption</h1>
        <p className="lg:max-w-lg">
          Welcome to our adoption section, where you can make a difference in
          the life of a stray animal in Mauritius. By choosing to adopt,
          you&apos;re not only providing a loving home for a deserving animal
          but also contributing to the welfare of our community.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {adoptions.map((adoption) => (
          <Link
            className="group bg-pure-white rounded-md overflow-hidden shadow-sm hover:shadow transition-shadow cursor-pointer"
            key={adoption._id}
            href={`/adoptions/${adoption.slug}`}>
            {adoption.image && (
              <div className="h-52 overflow-hidden">
                <Image
                  src={adoption.image}
                  alt={adoption.name}
                  width={208}
                  height={208}
                  className="group-hover:scale-110 w-full h-52 object-cover overflow-hidden transition-transform"
                  placeholder="blur"
                  blurDataURL={adoption.image}
                />
              </div>
            )}
            <div className="flex gap-4 flex-col px-4 pt-2 pb-4">
              <span className="font-semibold capitalize">
                {adoption.name + "."}
              </span>
              {adoption.age && (
                <span className="flex gap-4 items-center">
                  <FontAwesomeIcon icon={faStethoscope} />
                  {calcAge(adoption.age)}
                </span>
              )}
              <span className="flex gap-4 items-center">
                <FontAwesomeIcon icon={faLocationPin} />
                {adoption.location}
              </span>
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
