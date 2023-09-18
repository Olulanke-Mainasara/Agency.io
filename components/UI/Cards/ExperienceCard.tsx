"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import React from "react";

type Experience = {
  id: number;
  experience: string;
  description: string;
  icon: React.JSX.Element;
};

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) => {
  const [hasViewed, setHasViewed] = React.useState(false);

  return (
    <motion.div
      initial={hasViewed ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.1,
          delay: index * 0.1,
        },
      }}
      onAnimationComplete={() => setHasViewed(true)}
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
          <h2 className="first-letter:uppercase">{experience.experience}</h2>
        </div>

        <p className="text-lg opacity-70">{experience.description}</p>
      </Link>
    </motion.div>
  );
};

export default ExperienceCard;
