import ExperienceYourLocal from "@/components/Home-Page/ExperienceYourLocal";
import Main from "@/components/Home-Page/Main";
import RecommendedCitySpots from "@/components/Home-Page/RecommendedCitySpots";
import CarouselSkeleton from "@/components/UI/Carousel/CarouselSkeleton";
import React from "react";

export default function Home() {
  return (
    <>
      <Main>
        <React.Suspense fallback={<CarouselSkeleton side="items-end" />}>
          <ExperienceYourLocal />
        </React.Suspense>
        <React.Suspense fallback={<CarouselSkeleton side="items-end" />}>
          <RecommendedCitySpots />
        </React.Suspense>
      </Main>
    </>
  );
}
