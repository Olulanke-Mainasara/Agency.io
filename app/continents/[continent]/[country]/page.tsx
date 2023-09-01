import Footer from "@/components/UI/Footer/Footer";
import {
  africa,
  asia,
  australia,
  europe,
  northAmerica,
  southAmerica,
} from "@/static-data/continents";

export function generateStaticParams({
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

  return continentData.map((country) => {
    country;
  });
}
export default function Page({
  params: { country },
}: {
  params: { country: string };
}) {
  return (
    <>
      <div className="px-6 pt-24 space-y-8 xl:px-8 max-w-[1440px] mx-auto">
        <h1 className="text-4xl md:text-7xl dark:text-white">
          {country.split("-").join(" ")}
        </h1>
        <div className="min-h-screen py-8 border border-black dark:border-white dark:text-white grow rounded-xl"></div>
      </div>
      <Footer />
    </>
  );
}
