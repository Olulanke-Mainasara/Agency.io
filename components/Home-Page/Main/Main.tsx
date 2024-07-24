import React from "react";

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
  return (
    <React.Suspense>
      <Nav />

      <Body>
        <div className="space-y-40">
          <div className="md:space-y-40">
            <Search />

            <div className="my-6 flex flex-col items-center md:hidden">
              <div className="h-24 w-[2.5px] rounded bg-brandDark dark:bg-brandLight" />
            </div>

            <TopFeaturedDestinations />
          </div>

          <PopularDestinations />

          <VacationCarousel />

          <ExperienceYourLocal />

          <BrowseByExperience />

          <RecommendedCitySpots />

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
