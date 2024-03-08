import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getTaxis } from "../../../../sanity/sanity-utils";
import { Taxi } from "../../../types/Taxi";
import TaxiContent from "./TaxiContent";
import { faTaxi } from "@fortawesome/free-solid-svg-icons";

export default async function Taxis() {
  const taxis: Taxi[] = await getTaxis();

  return (
    <section>
      <div className="bg-pastel-dark mb-16">
        <div className="max-w-6xl mx-auto px-4 pt-24 pb-16 text-white">
          <span className="inline-block font-semibold text-xs border-[1px] border-white text-white px-4 py-2 rounded-full mb-4 hover:bg-white hover:text-pastel-dark transition-colors duration-300">
            animal transportation.
          </span>
          <h1 className="text-6xl font-bold mb-8">
            <FontAwesomeIcon icon={faTaxi} className="mr-4" />
            Taxi Services
          </h1>
          <p className="md:max-w-96">
            Find a taxi for your pet near you. If you are a taxi driver and
            would like to be listed on our website, please contact us.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <TaxiContent taxiList={taxis} />
      </div>
    </section>
  );
}
