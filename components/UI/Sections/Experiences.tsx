"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { Experience } from "@/types/Experience";

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
      className="hidden grow grid-cols-3 gap-10 overflow-hidden lg:grid xl:hidden"
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
      className="grid grow grid-cols-1 gap-10 overflow-hidden md:grid-cols-2 lg:hidden"
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
      } grow grid-cols-1 gap-10 overflow-hidden md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
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
