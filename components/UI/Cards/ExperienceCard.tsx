import React from "react";
import Image from "next/image";
import Link from "next/link";
import { staticExperiencesData } from "@/static-data/images";
import { motion } from "framer-motion";

import { Experience } from "@/types/Experience";

const ExperienceCard = ({
  experience,
  index,
  start,
}: {
  experience: Experience;
  index: number;
  start: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={
        start
          ? {
              opacity: 1,
              transition: {
                duration: 0.2,
                delay: index * 0.15,
              },
            }
          : { opacity: 0, transition: { duration: 0.1, delay: index * 0.1 } }
      }
      className="w-full h-full border border-black rounded-xl duration-300 hover:border-brandLight dark:border-white dark:hover:border-brandLight"
    >
      <Link
        href={`/experiences/${experience.slug}`}
        prefetch={false}
        className="w-full h-full"
      >
        {experience.displayImage && (
          <div className="relative w-full overflow-hidden h-44 rounded-t-xl">
            <Image
              src={experience.displayImage.url}
              fill
              sizes="(max-width: 1200px) 50vw, 33vw"
              quality={50}
              className="object-cover"
              alt={
                experience.displayImage.alt ? experience.displayImage.alt : ""
              }
            />
          </div>
        )}

        <div className="p-5 space-y-2">
          <div className="flex items-center text-2xl gap-2">
            <span className="text-brandDark dark:text-brandLight">
              {
                staticExperiencesData.find(
                  (experienceData) => experienceData.name === experience.slug
                )?.icon
              }
            </span>
            <p className="first-letter:uppercase">{experience.name}</p>
          </div>

          <p className="text-lg opacity-70">{experience.description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ExperienceCard;
