"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

const BuildTripCTACard = ({
  imgsrc,
  index,
}: {
  imgsrc: StaticImageData;
  index: number;
}) => {
  const [hasViewed, setHasViewed] = React.useState(false);

  return (
    <motion.div
      initial={hasViewed ? { opacity: 1 } : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.2,
        delay: 0.2 * index,
      }}
      onAnimationComplete={() => setHasViewed(true)}
      className={`aspect-square w-72`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <Image
          src={imgsrc}
          width={314}
          height={305}
          alt="Vacation pictures"
          className="h-full w-full object-cover"
          placeholder="blur"
        />
      </div>
    </motion.div>
  );
};

export default BuildTripCTACard;
