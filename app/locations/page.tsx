import LocationImageCard from "@/components/UI/Cards/LocationImageCard";
import { client } from "@/sanity/lib/client";

export default async function Locations() {
  const locations: ContinentInfo[] = await client.fetch(
    `*[_type == "continent"]{_id, name, "slug": slug.current, "map": { "image": map.asset->url, "alt": map.alt }}`
  );

  return (
    <div className="px-6 pt-24 space-y-8 xl:px-8 max-w-[1440px] mx-auto">
      <h1 className="text-4xl text-center md:text-7xl dark:text-white">
        Locations
      </h1>

      <div className="text-white grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {locations.map((continent, index) => {
          return (
            <LocationImageCard
              key={continent._id}
              index={index}
              continent={continent}
            />
          );
        })}
      </div>
    </div>
  );
}
