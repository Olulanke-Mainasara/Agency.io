import React from "react";
import { recommendedDes } from "@/static-data/destinations";

import SharedPagePlaceCarousel from "../UI/Carousel/SharedPagePlaceCarousel";

const RecommendedDestinations = () => {
  return (
    <section className="flex flex-col gap-8 xl:py-8">
      <h1 className="px-6 text-right text-4xl md:text-5xl xl:px-8">
        Destinations we{" "}
        <span className="text-brandDark dark:text-brandLight">recommend</span>
      </h1>

      <SharedPagePlaceCarousel items={recommendedDes} />
    </section>
  );
};

export default RecommendedDestinations;
