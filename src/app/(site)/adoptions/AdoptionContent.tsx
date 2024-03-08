"use client";

import { calcAge } from "@/app/utils";
import {
  faStethoscope,
  faLocationPin,
  faCheckCircle,
  faCircleXmark,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Adoption } from "../../../types/Adoption";
import Image from "next/image";
import { useEffect, useState } from "react";
import Checkbox from "@/components/Checkbox";

const AdoptionContent = ({ adoptionList }: { adoptionList: Adoption[] }) => {
  const [sortedList, setSortedList] = useState(adoptionList);
  const [selectedBreeds, setSelectedBreeds] = useState<string[]>([]);

  const handleSortByBreed = () => {
    const sorted = adoptionList.filter((adoption) =>
      selectedBreeds.includes(adoption.breed)
    );
    setSortedList(sorted);
  };

  const handleCheckboxChange = (breed: string) => {
    let updatedBreeds = [...selectedBreeds];
    if (selectedBreeds.includes(breed)) {
      updatedBreeds = updatedBreeds.filter((item) => item !== breed);
    } else {
      updatedBreeds.push(breed);
    }
    setSelectedBreeds(updatedBreeds);
  };

  useEffect(() => {
    setSortedList(adoptionList);
  }, [adoptionList]);

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-4">
          <Checkbox
            id="dog"
            value="dog"
            label="Dogs"
            ariaLabel="dog"
            action={() => handleCheckboxChange("dog")}
          />
          <Checkbox
            id="cat"
            value="cat"
            label="Cats"
            ariaLabel="cat"
            action={() => handleCheckboxChange("cat")}
          />

          <button
            className="flex gap-4 ml-auto items-center px-4 py-2 rounded-full border-2 border-pastel-dark hover:bg-pastel-dark hover:text-white transition-colors duration-300"
            onClick={handleSortByBreed}>
            <FontAwesomeIcon icon={faSort} />
            Sort by Breed
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:md:grid-cols-5 gap-4">
        {sortedList.length > 0 ? (
          sortedList.map((adoption) => (
            <Link
              className="group bg-pure-white rounded-md overflow-hidden shadow hover:shadow-md transition-shadow cursor-pointer"
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
                  <span
                    className={`flex gap-2 items-center rounded-full border-2 px-2 py-1 ${
                      adoption.neutered === "yes"
                        ? "bg-green border-green"
                        : "bg-vermillion border-vermillion text-white"
                    }`}>
                    {adoption.neutered === "yes" ? (
                      <FontAwesomeIcon icon={faCheckCircle} />
                    ) : (
                      <FontAwesomeIcon icon={faCircleXmark} />
                    )}
                    Neutered
                  </span>
                  <span
                    className={`flex gap-2 items-center rounded-full border-2 px-2 py-1 ${
                      adoption.vaccinated === "yes"
                        ? "bg-green border-green "
                        : "bg-vermillion border-vermillion text-white"
                    }`}>
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
          ))
        ) : (
          <p className="text-3xl text-center text-pastel-dark">
            No adoption listing found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AdoptionContent;
