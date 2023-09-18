import { notFound } from "next/navigation";

import LocationImageCard from "@/components/UI/Cards/LocationImageCard";
import {
  africa,
  asia,
  australia,
  europe,
  northAmerica,
  southAmerica,
} from "@/static-data/continents";

const itemsPerSet = 5; // Define the number of items in each set
const actionIndexes = [0, 1]; // Define the indexes at which to perform the action
const continents = [
  "africa",
  "asia",
  "australia",
  "europe",
  "northAmerica",
  "southAmerica",
];

export function generateStaticParams() {
  return [
    { continent: "africa" },
    { continent: "asia" },
    { continent: "australia" },
    { continent: "europe" },
    { continent: "northAmerica" },
    { continent: "southAmerica" },
  ];
}

export default function Page({
  params: { continent },
}: {
  params: { continent: string };
}) {
  if (!continents.includes(continent)) {
    notFound();
  }

  let continentData;

  // Determine the location data based on the parameter in the URL
  switch (continent) {
    case "africa":
      continentData = africa;
      break;
    case "asia":
      continentData = asia;
      break;
    case "australia":
      continentData = australia;
      break;
    case "europe":
      continentData = europe;
      break;
    case "northAmerica":
      continentData = northAmerica;
      break;
    case "southAmerica":
      continentData = southAmerica;
      break;
    default:
      continentData = africa; // Use Africa data as default
      break;
  }

  return (
    <>
      <div className="px-6 pt-20 md:pt-24 xl:px-8 max-w-[1440px] mx-auto">
        <h1 className="text-4xl text-center md:text-7xl dark:text-white">
          {continent == "northAmerica"
            ? "NORTH AMERICA"
            : continent == "southAmerica"
            ? "SOUTH AMERICA"
            : continent.toUpperCase()}
        </h1>
        <div className="min-h-screen py-8 text-white grid grid-flow-row-dense gap-8 md:grid-cols-2 lg:grid-cols-6">
          {continentData.map((country, index) => {
            return (
              <LocationImageCard
                key={country.id}
                index={index}
                continent={continent}
                country={country.name}
                cols={actionIndexes.includes(index % itemsPerSet) ? 3 : 2}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
