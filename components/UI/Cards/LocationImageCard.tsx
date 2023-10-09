"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import React from "react";

const LocationImageCard = ({
  continent,
  index,
}: {
  continent: ContinentInfo;
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
      className="h-[300px] border border-transparent dark:border-white rounded-xl overflow-hidden text-2xl xl:text-xl group"
    >
      <Link href={`/locations/${continent.slug}`} className={`relative h-full`}>
        <div className="w-full h-full">
          <div className="relative w-full h-full duration-500 group-hover:scale-110">
            <Image
              src={continent.map.image}
              width={314}
              height={305}
              className="object-cover w-full h-full"
              alt={continent.map.alt}
            />
          </div>

          <div className="absolute inset-0 pt-5 pl-5 backdrop-brightness-[80%]">
            <h1>{continent.name}</h1>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default LocationImageCard;
