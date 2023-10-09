"use client";

import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import React from "react";

import ExperienceCard from "../Cards/ExperienceCard";

const Experiences = ({
  sliced,
  experiences,
}: {
  sliced?: number;
  experiences: Experience[];
}) => {
  const [cardsVisible, setCardsVisible] = React.useState(false);
  const pathName = usePathname();

  return sliced === 9 ? (
    <motion.div
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      onAnimationComplete={() => setCardsVisible(true)}
      className="hidden overflow-hidden grid-cols-3 gap-10 lg:grid xl:hidden grow"
    >
      {experiences.slice(0, sliced).map((experience, index) => {
        return (
          <ExperienceCard
            experience={experience}
            start={cardsVisible}
            index={index}
            key={experience._id}
          />
        );
      })}
    </motion.div>
  ) : sliced === 6 ? (
    <motion.div
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      onAnimationComplete={() => setCardsVisible(true)}
      className="overflow-hidden grid grid-cols-1 gap-10 lg:hidden md:grid-cols-2 grow"
    >
      {experiences.slice(0, sliced).map((experience, index) => {
        return (
          <ExperienceCard
            experience={experience}
            start={cardsVisible}
            index={index}
            key={experience._id}
          />
        );
      })}
    </motion.div>
  ) : (
    <motion.div
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      onAnimationComplete={() => setCardsVisible(true)}
      className={`${
        pathName === "/" ? "hidden xl:grid" : "grid"
      } grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 overflow-hidden grow`}
    >
      {experiences.map((experience, index) => {
        return (
          <ExperienceCard
            experience={experience}
            start={cardsVisible}
            index={index}
            key={experience._id}
          />
        );
      })}
    </motion.div>
  );
};

export default Experiences;
