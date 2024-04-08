import React from "react";
import { getEstablishments } from "@/sanity/lib/getEstablishment(s)";

import { EstablishmentInfo } from "@/types/EstablishmentInfo";

import SharedPageEstablishmentCarousel from "../UI/Carousel/SharedPageEstablishmentCarousel";

const RecommendedCitySpots = async ({
  rawLocationData,
}: {
  rawLocationData: any;
}) => {
  let cityName;

  cityName =
    rawLocationData.country_name === "your country"
      ? rawLocationData.region_name
      : `in ${rawLocationData.region_name}`;

  let cities: EstablishmentInfo[];

  try {
    cities = await getEstablishments(cityName);
  } catch (err) {
    cities = [];
  }

  return (
    <section className="flex flex-col gap-8 xl:py-8">
      <h1 className="px-6 text-right text-4xl md:text-5xl xl:px-8">
        Recommended{" "}
        <span className="text-brandDark dark:text-brandLight">spots</span>{" "}
        {cityName}
      </h1>

      <SharedPageEstablishmentCarousel items={cities} />
    </section>
  );
};

export default RecommendedCitySpots;
