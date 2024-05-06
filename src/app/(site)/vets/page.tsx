import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getVets } from "../../../../sanity/sanity-utils";
import { Vet } from "../../../types/Vet";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import VetContent from "./VetContent";
import { sanityFetch } from "../../../../sanity/config/client-config";
import { vetQuery } from "../../../../sanity/sanity.query";

export default async function Vets() {
  const vets: Vet[] = await sanityFetch({
    query: vetQuery,
    tags: ["vet"],
  });

  return (
    <section>
      <div className="bg-pastel-dark text-white px-4 pt-24 pb-16">
        <div className="mx-auto max-w-6xl">
          <span className="inline-block font-semibold text-xs border-[1px] border-white text-white px-4 py-2 rounded-full mb-4 hover:bg-white hover:text-pastel-dark transition-colors duration-300">
            animal health and welfare.
          </span>
          <h1 className="text-6xl font-bold mb-8">
            <FontAwesomeIcon icon={faMapLocation} className="mr-4" />
            Find a Vet Near You.
          </h1>
          <p className="md:max-w-96">
            Find a vet near you. If you are a vet and would like to be listed on
            our website, please contact us.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col gap-8 lg:gap-16 justify-start items-center px-4 py-16 max-w-6xl mx-auto z-10">
        <VetContent vetList={vets} />
      </div>
    </section>
  );
}
