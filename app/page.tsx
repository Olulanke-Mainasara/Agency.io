import ExperienceYourLocal from "@/components/Home-Page/ExperienceYourLocal";
import Main from "@/components/Home-Page/Main";
import RecommendedCitySpots from "@/components/Home-Page/RecommendedCitySpots";
import CarouselSkeleton from "@/components/UI/Carousel/CarouselSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Main>
        <Suspense fallback={<CarouselSkeleton side="items-end" />}>
          <ExperienceYourLocal />
        </Suspense>
        <Suspense fallback={<CarouselSkeleton side="items-end" />}>
          <RecommendedCitySpots />
        </Suspense>
      </Main>
    </>
  );
}
