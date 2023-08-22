"use client";

import Splash from "@/components/UI/Splash/Splash";
import React from "react";
import { useSessionStorage } from "react-use";

import Blog from "./Blog";
import BrowseByExperience from "./BrowseByExperience";
import CTA from "./CTA";
import ExperienceYourLocal from "./ExperienceYourLocal";
import PopularDestinations from "./PopularDestinations";
import RecommendedCitySpots from "./RecommendedCitySpots";
import RecommendedDestinations from "./RecommendedDestinations";
import Search from "./Search";
import TopFeaturedDestinations from "./TopFeaturedDestinations";
import VacationCarousel from "./VacationCarousel";
import Welcome from "./Welcome";
import WhatWeOffer from "./WhatWeOffer";

const Main = () => {
  const [splashed, setSplashed] = useSessionStorage("splashed", "");
  const [splashCount, setSplashCount] = React.useState(0);

  React.useEffect(() => {
    if (splashed !== "") return; // Skip if already set

    const timeout = setTimeout(() => {
      setSplashed("true");
      setSplashCount((prev) => prev + 1);
    }, 2900);
    window.addEventListener("beforeunload", () => setSplashed(""));

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("beforeunload", () => setSplashed(""));
    };
  }, [splashed, setSplashed]);

  return (
    <div className={`${splashed !== "true" ? "h-screen overflow-hidden" : ""}`}>
      {splashed !== "true" && splashCount == 0 ? <Splash /> : null}

      <main className="w-screen max-w-[1440px] mx-auto space-y-40">
        <Search />
        <Welcome />
        <TopFeaturedDestinations />
        <WhatWeOffer />
        <PopularDestinations />
        <VacationCarousel />
        <ExperienceYourLocal />
        <BrowseByExperience />
        <RecommendedCitySpots />
        <Blog />
        <CTA />
        <RecommendedDestinations />
      </main>
    </div>
  );
};

export default Main;
