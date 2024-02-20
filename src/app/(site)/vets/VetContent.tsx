"use client";

import Image from "next/image";
import {
  faLocationArrow,
  faEnvelope,
  faPhone,
  faCopy,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CopyToClipboard from "react-copy-to-clipboard";
import { Vet } from "../../../../types/Vet";
import { useState, useEffect } from "react";
import Checkbox from "@/components/Checkbox";

const VetContent = ({ vetList }: { vetList: Vet[] }) => {
  const [sortedList, setSortedList] = useState(vetList);
  const [selectedRegions, setSelectedRegion] = useState<string[]>([]);

  useEffect(() => {
    setSortedList(vetList);
  }, [vetList]);

  const handleSortByRegion = () => {
    const sorted = vetList.filter((vet) =>
      selectedRegions.includes(vet.region)
    );
    setSortedList(sorted);
  };

  const handleCheckboxChange = (region: string) => {
    let updatedRegion = [...selectedRegions];
    if (selectedRegions.includes(region)) {
      updatedRegion = updatedRegion.filter((item) => item !== region);
    } else {
      updatedRegion.push(region);
    }
    setSelectedRegion(updatedRegion);
  };
  return (
    <div className="flex justify-start flex-col lg:flex-row gap-8">
      <div className="mb-8 lg:max-w-36 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-none items-center gap-4">
          <Checkbox
            id="north"
            value="north"
            label="North"
            ariaLabel="north"
            action={() => handleCheckboxChange("north")}
          />
          <Checkbox
            id="south"
            value="south"
            label="South"
            ariaLabel="south"
            action={() => handleCheckboxChange("south")}
          />
          <Checkbox
            id="east"
            value="east"
            label="East"
            ariaLabel="east"
            action={() => handleCheckboxChange("east")}
          />
          <Checkbox
            id="west"
            value="west"
            label="West"
            ariaLabel="west"
            action={() => handleCheckboxChange("west")}
          />

          <button
            className="flex justify-center text-sm gap-4 lg:ml-auto items-center px-3 py-2 rounded-full border-2 border-pastel-dark hover:bg-pastel-dark hover:text-white transition-colors duration-300"
            onClick={handleSortByRegion}>
            <FontAwesomeIcon icon={faSort} />
            Sort by Region
          </button>
        </div>
      </div>

      <div className="w-full">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {sortedList.length > 0 ? (
            sortedList.map((vet: Vet) => (
              <div
                className="flex rounded-lg overflow-hidden shadow"
                key={vet._id}>
                <div>
                  <Image
                    className="h-40 w-40 object-cover overflow-hidden shadow"
                    src={vet.image}
                    alt={vet.name}
                    width={150}
                    height={150}
                  />
                </div>
                <div className="flex items-center h-full border-l- border-pastel-dark rounded-l-none  rounded-lg">
                  <div className="inline-flex flex-col gap-4 ml-2">
                    <span className="block h-3 w-3 rounded-full bg-pastel-dark"></span>
                    <span className="block h-3 w-3 rounded-full bg-pastel-dark"></span>
                    <span className="block h-3 w-3 rounded-full bg-pastel-dark"></span>
                  </div>
                  <div className="px-4 py-2 flex flex-col gap-2">
                    <span>{vet.name}</span>
                    <span className="flex gap-4 items-center">
                      <FontAwesomeIcon icon={faLocationArrow} />
                      {vet.region + "."}
                    </span>
                    <span className="group flex gap-4 items-center">
                      <FontAwesomeIcon icon={faEnvelope} />
                      {vet.contact_email}
                      <CopyToClipboard text={vet.contact_email}>
                        <button className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300">
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </CopyToClipboard>
                    </span>
                    <span className="group flex gap-4 items-center">
                      <FontAwesomeIcon icon={faPhone} />
                      {vet.contact_tel}
                      <CopyToClipboard text={vet.contact_tel}>
                        <button className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300">
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </CopyToClipboard>
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-3xl text-center text-white">No vet found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VetContent;
