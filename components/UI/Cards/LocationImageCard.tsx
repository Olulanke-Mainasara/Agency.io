"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
      className="group h-[300px] overflow-hidden rounded-xl border border-transparent text-2xl dark:border-gray-400 xl:text-xl"
    >
      <Link href={`/places/${continent.value}`} className={`relative h-full`}>
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

          <div className="absolute inset-0 pl-5 pt-5 backdrop-brightness-[80%]">
            <h1>{continent.label}</h1>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default LocationImageCard;
