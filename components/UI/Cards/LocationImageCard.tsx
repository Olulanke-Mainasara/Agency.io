"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import NBgLink from "../Links/NBgLink";

type Continent = {
  id: number;
  label: string;
  value: string;
  map: {
    url: StaticImageData;
    alt: string;
  };
};

const LocationImageCard = ({
  continent,
  index,
}: {
  continent: Continent;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.2 * index,
        },
      }}
      className="group relative h-[300px] overflow-hidden rounded-xl border border-transparent text-2xl dark:border-gray-400 xl:text-xl"
    >
      <div className="h-full w-full">
        <div className="relative h-full w-full duration-500 group-hover:scale-110">
          <Image
            src={continent.map.url}
            width={314}
            height={305}
            className="h-full w-full object-cover"
            alt={continent.map.alt ? continent.map.alt : ""}
          />
        </div>

        <div className="absolute inset-0 pl-5 pt-5 backdrop-brightness-[60%]">
          <h1>{continent.label}</h1>
        </div>

        <div className="absolute bottom-0 flex w-full justify-end pb-5 pr-5">
          <NBgLink
            prompt="visit"
            href={`/places/${continent.value}`}
            extraStyles="justify-end"
            linkStyles="w-fit text-2xl md:text-xl"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LocationImageCard;
