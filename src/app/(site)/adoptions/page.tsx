import Link from "next/link";
import { getAdoptions } from "../../../../sanity/sanity-utils";
import { Adoption } from "../../../types/Adoption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faLink } from "@fortawesome/free-solid-svg-icons";
import AdoptionContent from "./AdoptionContent";

export default async function Adoptions() {
  const adoptions: Adoption[] = await getAdoptions();

  return (
    <div>
      <div className="relative w-full mb-8">
        <video
          className="h-[600px] object-cover w-full hidden lg:block"
          width="100%"
          height="240"
          preload="none"
          autoPlay
          playsInline
          loop
          muted>
          <source src="/adoption.mp4" type="video/mp4" />
        </video>
        <Link
          className="hidden lg:block absolute bottom-4 right-4 text-sm bg-pastel-dark text-white px-4 py-2 rounded-full z-10"
          href="
          https://www.pexels.com/video/a-volunteer-caring-for-homeless-dogs-7474276/
          "
          target="_blank">
          <FontAwesomeIcon icon={faLink} className="mr-2" />
          Video by Mikhail Nilov
        </Link>
        <div className="lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 z-0 object-cover w-full h-full flex flex-col justify-center items-center lg:items-end max-w-6xl">
          <div className="bg-primary border-none px-4 py-8 pt-24 lg:pt-8 lg:rounded-md text-white">
            <h1 className="text-6xl font-bold mb-4">Adoption</h1>
            <span className="block w-full h-[1px] bg-white my-2"></span>
            <p className="lg:max-w-md">
              Welcome to our adoption section, where you can make a difference
              in the life of a stray animal in Mauritius. By choosing to adopt,
              you&apos;re not only providing a loving home for a deserving
              animal but also contributing to the welfare of our community.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 justify-start items-center px-4 max-w-6xl mx-auto mb-16">
        <span className="font-semibold">
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
          Be sure to read about how to take care of animals from this{" "}
          <a
            className="text-blue"
            href="https://www.pawsmauritius.org/dogs-for-adoption/"
            target="_blank">
            PAWS website
          </a>{" "}
          before adopting them.{" "}
        </span>

        <AdoptionContent adoptionList={adoptions} />
      </div>
    </div>
  );
}
