import Link from "next/link";

import { experiences } from "@/static-data/locationsAndExperiences";
import React from "react";

const Section6 = () => {
  return (
    <section className="flex flex-col w-full gap-10 p-8">
      <h1 className="text-5xl">Browse by experience type</h1>

      <div className="grid grid-cols-4 gap-10 grow">
        {experiences.map((experience) => {
          return (
            <Link
              href={`/experience/${experience.experience}`}
              key={experience.id}
              className="p-6 space-y-5 duration-300 border hover:border-brandLight rounded-xl"
            >
              <div className="flex items-center gap-2 text-2xl">
                <span className="text-brandDark dark:text-brandLight">{experience.icon}</span>
                <h2 className="first-letter:uppercase">{experience.experience}</h2>
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
