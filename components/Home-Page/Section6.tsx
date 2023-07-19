import Link from "next/link";

import { experiences } from "@/static-data/locationsAndExperiences";
import React from "react";

const Section6 = () => {
  return (
    <section className="flex flex-col w-full p-8 py-0 gap-10 xl:py-8">
      <h1 className="text-4xl md:text-5xl ">Browse by experience type</h1>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4 grow">
        {experiences.map((experience) => {
          return (
            <Link
              href={`/experience/${experience.experience}`}
              key={experience.id}
              className="p-6 border border-black space-y-5 duration-300 dark:border-white hover:border-brandLight dark:hover:border-brandLight rounded-xl"
            >
              <div className="flex items-center text-2xl gap-2">
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
    </section>
  );
};

export default Section6;
