import { getTaxis } from "../../../../sanity/sanity-utils";
import { Taxi } from "../../../../types/Taxi";

export default async function Taxis() {
  const taxis: Taxi[] = await getTaxis();

  return (
    <section className="bg-pastel-dark">
      <div className="relative flex flex-col gap-8 lg:gap-16 justify-start items-center px-4 py-16 max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {taxis.length > 0 ? (
            taxis.map((taxi) => <div key={taxi._id}>{taxi.name}</div>)
          ) : (
            <p className="text-3xl text-center text-white">No taxi found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
