import { allLocations } from "@/static-data/continents";

import LocationImageCard from "@/components/UI/Cards/LocationImageCard";

export default async function Locations() {
  return (
    <main className="mx-auto max-w-[1440px] space-y-8 px-6 pt-20 lg:pt-24 xl:px-8">
      <h1 className="text-4xl text-center dark:text-white md:text-7xl">
        Locations
      </h1>

      <div className="text-white grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {allLocations.map((continent, index) => {
          return (
            <LocationImageCard
              key={continent.id}
              index={index}
              continent={continent}
            />
          );
        })}
      </div>
    </main>
  );
}
