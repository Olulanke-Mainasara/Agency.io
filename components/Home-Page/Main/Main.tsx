import React from "react";

import { getUserLocationData } from "@/lib/getUserLocationData";
import CarouselSkeleton from "@/components/UI/Carousel/CarouselSkeleton";
import Footer from "@/components/UI/Footer/Footer";
import Nav from "@/components/UI/Nav/Nav";

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

const Main = async () => {
  const rawLocationData = await getUserLocationData();

  return (
    <React.Suspense>
      <Nav />

      <Body>
        <div className="space-y-40">
          <div className="space-y-28">
            <Search />

            <TopFeaturedDestinations />
          </div>

          <PopularDestinations />

          <VacationCarousel />

          <React.Suspense fallback={<CarouselSkeleton side="items-end" />}>
            <ExperienceYourLocal rawLocationData={rawLocationData} />
          </React.Suspense>

          <BrowseByExperience />

          <React.Suspense fallback={<CarouselSkeleton side="items-end" />}>
            <RecommendedCitySpots rawLocationData={rawLocationData} />
          </React.Suspense>

          <PropertyCarousel />

          <Blog />

          <BuildTripCTA />

          <RecommendedDestinations />

          <GetAppCTA />
        </div>
      </Body>

      <Footer />
    </React.Suspense>
  );
};

export default Main;
