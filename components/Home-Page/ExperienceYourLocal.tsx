"use client";

import React from "react";

import { useLocationContext } from "../Providers/Providers";
import CarouselSkeleton from "../UI/Carousel/CarouselSkeleton";
import SharedPagePlaceCarousel from "../UI/Carousel/SharedPagePlaceCarousel";

const ExperienceYourLocal = () => {
  const {
    location: {
      isGeolocationEnabled,
      isConfirmed,
      loading,
      userLocation,
      availableCities,
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
        Experience{" "}
        <span className="text-brandDark dark:text-brandLight">
          {userLocation?.address.country}
        </span>{" "}
        from all sides
      </h1>

      <SharedPagePlaceCarousel items={availableCities} />
    </section>
  );
};

export default ExperienceYourLocal;
