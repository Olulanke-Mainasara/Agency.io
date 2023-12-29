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

  const renderExperienceCards = (sliced: number = 12) => {
    return experiences
      .slice(0, sliced)
      .map((experience, index) => (
        <ExperienceCard
          experience={experience}
          start={cardsVisible}
          index={index}
          key={experience._id}
        />
      ));
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      onAnimationComplete={() => setCardsVisible(true)}
    >
      {sliced === 9 && (
        <div className="hidden grid-cols-3 gap-10 lg:grid xl:hidden">
          {renderExperienceCards(sliced)}
        </div>
      )}
      {sliced === 6 && (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:hidden">
          {renderExperienceCards(sliced)}
        </div>
      )}
      {sliced !== 9 && sliced !== 6 && (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {renderExperienceCards(sliced)}
        </div>
      )}
    </motion.div>
  );
};

export default Experiences;
