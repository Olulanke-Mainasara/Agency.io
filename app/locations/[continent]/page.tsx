import { getCountries } from "@/sanity/lib/getCountry(ies)";

import { Country } from "@/types/Country";
import firstLetterToUpperCase from "@/lib/firstLetterToUpperCase";
import CountryImageCard from "@/components/UI/Cards/CountryImageCard";
import BadRequest from "@/components/UI/Sections/BadRequest";

export default async function Continent({
  params: { continent },
}: {
  params: { continent: string };
}) {
  let countries: Country[];

  try {
    const queryResult = await getCountries(continent);
    countries = queryResult;
  } catch (error) {
    return <BadRequest />;
  }

  return (
    <main className="mx-auto max-w-[1440px] px-6 pt-20 lg:pt-24 xl:px-8">
      <h1 className="text-4xl text-center dark:text-white md:text-7xl">
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
    </main>
  );
}
