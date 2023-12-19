import React from "react";
import { cities } from "@/static-data/images";

import SharedPagePlaceCarousel from "../UI/Carousel/SharedPagePlaceCarousel";

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

  return (
    <section className="flex flex-col gap-8 xl:py-8">
      <h1 className="px-6 text-4xl text-right md:text-5xl xl:px-8">
        Recommended{" "}
        <span className="text-brandDark dark:text-brandLight">spots</span>{" "}
        {cityName}
      </h1>

      <SharedPagePlaceCarousel items={cities} />
    </section>
  );
};

export default RecommendedCitySpots;
