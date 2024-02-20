import { getVets } from "../../../../sanity/sanity-utils";
import { Vet } from "../../../../types/Vet";
import Image from "next/image";

export default async function Vets() {
  const vets: Vet[] = await getVets();

  return (
    <section className="">
      <div className="relative flex flex-col gap-8 lg:gap-16 justify-start items-center px-4 py-16 max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {vets.length > 0 ? (
            vets.map((vet) => (
              <div
                className="flex gap-4 items-center border-pastel-lime border-2 rounded-xl overflow-hidden"
                key={vet._id}>
                <div className="">
                  <Image
                    className="h-40 w-40 object-cover overflow-hidden shadow"
                    src={vet.image}
                    alt={vet.name}
                    width={150}
                    height={150}
                  />
                </div>
                <div>
                  <span>{vet.name}</span>
                  <span>{vet.region}</span>
                  <span>{vet.contact_email}</span>
                  <span>{vet.contact_tel}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-3xl text-center text-white">No vet found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
