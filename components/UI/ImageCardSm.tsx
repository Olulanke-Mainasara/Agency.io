"use client";

import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";
import React from "react";

const ImageCardSm = ({
  imgsrc,
  index,
}: {
  imgsrc: StaticImageData;
  index: number;
}) => {
  const delayTime =
    index == 0 ? index + 1 * 3.0 : index + 1 * 3.0 - 1.1 * index;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: delayTime,
      }}
      className={`w-72 aspect-square`}
    >
      <div className="relative w-full h-full overflow-hidden border border-black rounded-lg dark:border-white">
        <Image src={imgsrc} priority fill alt="" placeholder="blur" />
      </div>
    </motion.div>
  );
};

export default ImageCardSm;
