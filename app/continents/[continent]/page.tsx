import LocationImageCard from "@/components/UI/Cards/LocationImageCard";
import {
  africa,
  asia,
  australia,
  europe,
  northAmerica,
  southAmerica,
} from "@/static-data/continents";

export default function Page({
  params: { continent },
}: {
  params: { continent: string };
}) {
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
        <h1 className="text-center text-8xl dark:text-white">
          {continent == "northAmerica"
            ? "NORTH AMERICA"
            : continent == "southAmerica"
            ? "SOUTH AMERICA"
            : continent.toUpperCase()}
        </h1>
        <div className="min-h-screen py-8 text-white grid grid-flow-row-dense grid-cols-5 gap-8">
          {continentData.map((country) => {
            const randomRows = Math.floor(Math.random() * 2) + 1;
            const randomCols = Math.floor(Math.random() * 2) + 1;
            return (
              <LocationImageCard
                key={country.id}
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
