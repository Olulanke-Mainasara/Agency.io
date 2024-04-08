import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Personnel = {
  id: number;
  name: string;
  position: string;
  image: {
    url: string;
    alt: string;
  };
};

const PersonnelCard = ({
  personnel,
  index,
  start,
}: {
  personnel: Personnel;
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
      className="h-full overflow-hidden rounded-xl border border-black dark:border-gray-400"
    >
      <div className="relative h-48 w-full overflow-hidden xl:h-48">
        <Image
          src={personnel.image.url}
          fill
          sizes="(max-width: 1200px) 50vw, 33vw"
          quality={50}
          className="object-cover"
          alt={personnel.image.alt ? personnel.image.alt : ""}
        />
      </div>

      <div className="p-6">
        <h1 className="mb-3 text-2xl text-black dark:text-white">
          {personnel.name}
        </h1>

        <p className="text-lg text-black opacity-70 dark:text-white">
          {personnel.position}
        </p>
      </div>
    </motion.div>
  );
};

export default PersonnelCard;
