import React from "react";
import { getExperiences } from "@/sanity/lib/getExperience(s)";

import { Experience } from "@/types/Experience";

import BrowseExperienceButton from "../UI/Buttons/BrowseExperienceButton";
import Experiences from "../UI/Sections/Experiences";

const BrowseByExperience = async () => {
  let experiences: Experience[];

  try {
    const queryResult = await getExperiences();
    experiences = queryResult;
  } catch (err) {
    experiences = [];
  }

  return (
    <section className="flex flex-col px-6 gap-8 xl:p-8">
      <h1 className="text-4xl md:text-5xl ">
        Browse by{" "}
        <span className="text-brandDark dark:text-brandLight">experience</span>{" "}
        type
      </h1>

      {experiences.length === 0 ? (
        <div className="flex h-[300px] w-full items-center justify-center gap-4 rounded-xl border border-black dark:border-white">
          <p className="text-xl">Error loading experiences</p>
        </div>
      ) : (
        <>
          <span className="hidden xl:block">
            <Experiences experiences={experiences} />
          </span>

          <span className="hidden lg:block xl:hidden">
            <Experiences experiences={experiences} sliced={9} />
          </span>

          <span className="lg:hidden">
            <Experiences experiences={experiences} sliced={6} />
          </span>
        </>
      )}

      <BrowseExperienceButton />
    </section>
  );
};

export default BrowseByExperience;
