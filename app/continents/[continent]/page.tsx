import LocationImageCard from "@/components/UI/Cards/LocationImageCard";
import { loadingTest } from "@/lib/loadingTest";
import {
  africa,
  asia,
  australia,
  europe,
  northAmerica,
  southAmerica,
} from "@/static-data/continents";

export default async function Page({
  params: { continent },
}: {
  params: { continent: string };
}) {
  await loadingTest(3000);

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
      <div className="px-8 pt-24">
        <h1 className="text-4xl text-center md:text-7xl dark:text-white">
          {continent == "northAmerica"
            ? "NORTH AMERICA"
            : continent == "southAmerica"
            ? "SOUTH AMERICA"
            : continent.toUpperCase()}
        </h1>
        <div className="min-h-screen py-8 text-white grid grid-flow-row-dense gap-8 md:grid-cols-2 xl:grid-cols-5">
          {continentData.map((country, index) => {
            const randomRows = Math.floor(Math.random() * 2) + 1;
            const randomCols = Math.floor(Math.random() * 2) + 1;
            return (
              <LocationImageCard
                key={country.id}
                index={index}
                continent={continent}
                country={country.name}
                rows={randomRows}
                cols={randomCols}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
