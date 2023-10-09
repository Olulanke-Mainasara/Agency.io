import { notFound } from "next/navigation";

import { getCountry } from "@/sanity/lib/getCountry(ies)";

export const runtime = "edge";

export default async function Country({
  params: { country },
}: {
  params: { country: string };
}) {
  const countryInfo = await getCountry(country);

  if (countryInfo.length === 0) {
    notFound();
  }

  const location = countryInfo[0];

  return (
    <div className="px-6 pt-24 space-y-8 xl:px-8 max-w-[1440px] mx-auto">
      <h1 className="text-4xl md:text-7xl dark:text-white">{location.name}</h1>
      <div className="min-h-screen border border-black dark:border-white dark:text-white grow rounded-xl"></div>
    </div>
  );
}
