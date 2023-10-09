import CountryImageCard from "@/components/UI/Cards/CountryImageCard";
import firstLetterToUpperCase from "@/lib/firstLetterToUpperCase";
import { getCountries } from "@/sanity/lib/getCountry(ies)";

export function generateStaticParams() {
  return [
    { continent: "africa" },
    { continent: "asia" },
    { continent: "australia" },
    { continent: "europe" },
    { continent: "north-america" },
    { continent: "south-america" },
  ];
}

export const dynamicParams = false;

export const dynamic = "force-dynamic";

export default async function Continent({
  params: { continent },
}: {
  params: { continent: string };
}) {
  const countries = await getCountries(continent);

  return (
    <div className="px-6 pt-20 md:pt-24 xl:px-8 max-w-[1440px] mx-auto">
      <h1 className="text-4xl text-center md:text-7xl dark:text-white">
        {firstLetterToUpperCase(continent, "-")}
      </h1>

      <div className="py-8 text-white grid gap-8 md:grid-cols-2 lg:grid-cols-6">
        {countries.map((country, index) => {
          return (
            <CountryImageCard
              key={country._id}
              index={index}
              continent={continent}
              country={country}
              cols={index % 5 === 0 || index % 5 === 1 ? 3 : 2}
            />
          );
        })}
      </div>
    </div>
  );
}
