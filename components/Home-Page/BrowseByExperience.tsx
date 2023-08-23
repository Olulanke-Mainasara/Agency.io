import Link from "next/link";

import { experiences } from "@/static-data/locationsAndExperiences";
import { ArrowRight } from "lucide-react";
import React from "react";

import NBgButtons from "../UI/Links/NBgLink";
import { Button } from "../UI/ShadUI/button";

const BrowseByExperience = () => {
  return (
    <section className="flex flex-col w-full gap-10 p-8 py-0 xl:py-8">
      <h1 className="text-4xl md:text-5xl ">Browse by <span className="text-brandDark dark:text-brandLight">experience</span> type</h1>

      <div className="hidden grid-cols-4 gap-10 xl:grid grow">
        {experiences.map((experience) => {
          return (
            <Link
              href={`/experience/${experience.experience}`}
              key={experience.id}
              className="p-6 space-y-5 duration-300 border border-black dark:border-white hover:border-brandLight dark:hover:border-brandLight rounded-xl"
            >
              <div className="flex items-center gap-2 text-2xl">
                <span className="text-brandDark dark:text-brandLight">
                  {experience.icon}
                </span>
                <h2 className="first-letter:uppercase">
                  {experience.experience}
                </h2>
              </div>

              <p className="text-lg opacity-70">{experience.description}</p>
            </Link>
          );
        })}
      </div>

      <div className="hidden grid-cols-3 gap-10 lg:grid xl:hidden grow">
        {experiences.slice(0, 9).map((experience) => {
          return (
            <Link
              href={`/experience/${experience.experience}`}
              key={experience.id}
              className="p-6 space-y-5 duration-300 border border-black dark:border-white hover:border-brandLight dark:hover:border-brandLight rounded-xl"
            >
              <div className="flex items-center gap-2 text-2xl">
                <span className="text-brandDark dark:text-brandLight">
                  {experience.icon}
                </span>
                <h2 className="first-letter:uppercase">
                  {experience.experience}
                </h2>
              </div>

              <p className="text-lg opacity-70">{experience.description}</p>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-10 lg:hidden md:grid-cols-2 grow">
        {experiences.slice(0, 6).map((experience) => {
          return (
            <Link
              href={`/experience/${experience.experience}`}
              key={experience.id}
              className="p-6 space-y-5 duration-300 border border-black dark:border-white hover:border-brandLight dark:hover:border-brandLight rounded-xl"
            >
              <div className="flex items-center gap-2 text-2xl">
                <span className="text-brandDark dark:text-brandLight">
                  {experience.icon}
                </span>
                <h2 className="first-letter:uppercase">
                  {experience.experience}
                </h2>
              </div>

              <p className="text-lg opacity-70">{experience.description}</p>
            </Link>
          );
        })}
      </div>

      <Button
        className="px-6 py-3 mx-auto h-fit xl:hidden w-fit"
        variant={"outline"}
        asChild
      >
        <Link href={"#"} className="text-xl">
          View more{" "}
          <span className="duration-300 text-brandLight group-hover:translate-x-1">
            <ArrowRight size={20} />
          </span>
        </Link>
      </Button>
    </section>
  );
};

export default BrowseByExperience;
