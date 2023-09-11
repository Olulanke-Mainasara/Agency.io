import CarouselSkeleton from "@/components/UI/Carousel/CarouselSkeleton";
import React from "react";

import Footer from "../../UI/Footer/Footer";
import Blog from "../Blog";
import BrowseByExperience from "../BrowseByExperience";
import BuildTripCTA from "../BuildTripCTA";
import ExperienceYourLocal from "../ExperienceYourLocal";
import GetAppCTA from "../GetAppCTA";
import PopularDestinations from "../PopularDestinations";
import PropertyCarousel from "../PropertyCarousel";
import RecommendedCitySpots from "../RecommendedCitySpots";
import RecommendedDestinations from "../RecommendedDestinations";
import Search from "../Search";
import TopFeaturedDestinations from "../TopFeaturedDestinations";
import VacationCarousel from "../VacationCarousel";
import Body from "./Body";

const Main = () => {
  return (
    <Body>
      <div className="space-y-40">
        <div className="space-y-28">
          <Search />

          <TopFeaturedDestinations />
        </div>

        <PopularDestinations />

        <VacationCarousel />

        <React.Suspense fallback={<CarouselSkeleton side="items-end" />}>
          <ExperienceYourLocal />
        </React.Suspense>

        <BrowseByExperience />

        <React.Suspense fallback={<CarouselSkeleton side="items-end" />}>
          <RecommendedCitySpots />
        </React.Suspense>

        <PropertyCarousel />

        <Blog />

        <BuildTripCTA />

        <RecommendedDestinations />

        <GetAppCTA />
      </div>
    </Body>
  );
};

export default Main;
