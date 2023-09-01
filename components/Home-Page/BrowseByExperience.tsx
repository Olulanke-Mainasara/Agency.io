import Link from "next/link";

import { experiences } from "@/static-data/images";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

import { Button } from "../UI/ShadUI/button";

const BrowseByExperience = () => {
  const [hasViewed, setHasViewed] = React.useState(false);

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
            <motion.div
              initial={
                hasViewed ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
              }
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.1,
                  delay: index * 0.1,
                },
              }}
              onAnimationComplete={() => setHasViewed(true)}
              key={experience.id}
              className="w-full h-full p-6 border border-black duration-300 dark:border-white hover:border-brandLight dark:hover:border-brandLight rounded-xl"
            >
              <Link
                href={`/experience/${experience.experience}`}
                prefetch={false}
                className="w-full h-full space-y-5"
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
            </motion.div>
          );
        })}
      </div>

      <div className="hidden overflow-hidden grid-cols-3 gap-10 lg:grid xl:hidden grow">
        {experiences.slice(0, 9).map((experience, index) => {
          return (
            <motion.div
              initial={
                hasViewed ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
              }
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.1,
                  delay: index * 0.1,
                },
              }}
              onAnimationComplete={() => setHasViewed(true)}
              key={experience.id}
              className="w-full h-full p-6 border border-black duration-300 dark:border-white hover:border-brandLight dark:hover:border-brandLight rounded-xl"
            >
              <Link
                href={`/experience/${experience.experience}`}
                prefetch={false}
                className="w-full h-full space-y-5"
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
            </motion.div>
          );
        })}
      </div>

      <div className="overflow-hidden grid grid-cols-1 gap-10 lg:hidden md:grid-cols-2 grow">
        {experiences.slice(0, 6).map((experience, index) => {
          return (
            <motion.div
              initial={
                hasViewed ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
              }
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.1,
                  delay: index * 0.1,
                },
              }}
              onAnimationComplete={() => setHasViewed(true)}
              key={experience.id}
              className="w-full h-full p-6 border border-black duration-300 dark:border-white hover:border-brandLight dark:hover:border-brandLight rounded-xl"
            >
              <Link
                href={`/experience/${experience.experience}`}
                prefetch={false}
                className="w-full h-full space-y-5"
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
            </motion.div>
          );
        })}
      </div>

      <Button
        className="px-6 py-3 mx-auto text-white bg-black border-none dark:text-black dark:bg-white h-fit md:w-[300px]"
        variant={"outline"}
        asChild
      >
        <Link href={"#"} prefetch={false} className="text-xl">
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
