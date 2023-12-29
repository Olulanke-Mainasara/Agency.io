import React from "react";
import { cities } from "@/static-data/images";

import SharedPagePlaceCarousel from "../UI/Carousel/SharedPagePlaceCarousel";

const ExperienceYourLocal = async ({
  rawLocationData,
}: {
  rawLocationData: any;
}) => {
  let countryName;

  countryName = rawLocationData.country_name;

  return (
    <section className="flex flex-col gap-8 xl:py-8">
      <h1 className="px-6 text-right text-4xl md:text-5xl xl:px-8">
        Experience{" "}
        <span className="text-brandDark dark:text-brandLight">
          {countryName}
        </span>{" "}
        from all sides
      </h1>

      <SharedPagePlaceCarousel items={cities} />
    </section>
  );
};

export default ExperienceYourLocal;
