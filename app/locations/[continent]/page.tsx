import { getCountries } from "@/sanity/lib/getCountry(ies)";

import firstLetterToUpperCase from "@/lib/firstLetterToUpperCase";
import CountryImageCard from "@/components/UI/Cards/CountryImageCard";

export default async function Continent({
  params: { continent },
}: {
  params: { continent: string };
}) {
  const countries = await getCountries(continent);

  return (
    <main className="mx-auto max-w-[1440px] px-6 pt-20 md:pt-24 xl:px-8">
      <h1 className="text-center text-4xl dark:text-white md:text-7xl">
        {firstLetterToUpperCase(continent, "-")}
      </h1>

      <div className="grid gap-8 py-8 text-white md:grid-cols-2 lg:grid-cols-6">
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
    </main>
  );
}
