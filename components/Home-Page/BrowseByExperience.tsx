import { experiences } from "@/static-data/images";
import React from "react";

import BrowseExperienceButton from "../UI/Buttons/BrowseExperienceButton";
import ExperienceCard from "../UI/Cards/ExperienceCard";

const BrowseByExperience = () => {
  return (
    <section className="flex flex-col px-6 gap-8 xl:p-8">
      <h1 className="text-4xl md:text-5xl ">
        Browse by{" "}
        <span className="text-brandDark dark:text-brandLight">experience</span>{" "}
        type
      </h1>

      <div className="hidden overflow-hidden grid-cols-4 gap-10 xl:grid grow">
        {experiences.map((experience, index) => {
          return (
            <ExperienceCard
              experience={experience}
              index={index}
              key={experience.id}
            />
          );
        })}
      </div>

      <div className="hidden overflow-hidden grid-cols-3 gap-10 lg:grid xl:hidden grow">
        {experiences.slice(0, 9).map((experience, index) => {
          return (
            <ExperienceCard
              experience={experience}
              index={index}
              key={experience.id}
            />
          );
        })}
      </div>

      <div className="overflow-hidden grid grid-cols-1 gap-10 lg:hidden md:grid-cols-2 grow">
        {experiences.slice(0, 6).map((experience, index) => {
          return (
            <ExperienceCard
              experience={experience}
              index={index}
              key={experience.id}
            />
          );
        })}
      </div>

      <BrowseExperienceButton />
    </section>
  );
};

export default BrowseByExperience;
