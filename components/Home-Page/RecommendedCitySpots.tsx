"use client";

import React from "react";

import { useLocationContext } from "../Providers/Providers";
import CarouselSkeleton from "../UI/Carousel/CarouselSkeleton";
import SharedPageEstablishmentCarousel from "../UI/Carousel/SharedPageEstablishmentCarousel";

const RecommendedCitySpots = () => {
  const {
    location: {
      isGeolocationEnabled,
      isConfirmed,
      loading,
      userLocation,
      availableEstablishments,
    },
  } = useLocationContext();

  if (!isGeolocationEnabled || isConfirmed === "false") {
    return null;
  }

  return loading ? (
    <CarouselSkeleton side="items-end" />
  ) : (
    <section className="flex flex-col gap-8 xl:py-8">
      <h1 className="px-6 text-right text-4xl md:text-5xl xl:px-8">
        Recommended{" "}
        <span className="text-brandDark dark:text-brandLight">spots in</span>{" "}
        {userLocation.address.city.split(" ")[0]}
      </h1>
      <SharedPageEstablishmentCarousel items={availableEstablishments} />
    </section>
  );
};

export default RecommendedCitySpots;
