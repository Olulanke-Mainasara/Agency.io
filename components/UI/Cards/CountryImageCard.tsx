"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import React from "react";

const CountryImageCard = ({
  continent,
  country,
  index,
  cols,
}: {
  continent: string;
  country: Country;
  index: number;
  cols: number;
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
      className={`h-[300px] border border-transparent dark:border-white rounded-xl overflow-hidden text-2xl xl:text-xl group xl:col-span-2 ${
        cols == 2 ? "lg:col-span-2" : cols == 3 ? "lg:col-span-3" : ""
      }`}
    >
      <Link
        href={`/locations/${continent}/${country.slug}`}
        className={`relative h-full`}
      >
        <div className="w-full h-full">
          <div className="relative w-full h-full duration-500 group-hover:scale-110">
            <Image
              src={country.picture.image}
              width={314}
              height={305}
              className="object-cover w-full h-full"
              alt={country.picture.alt}
            />
          </div>

          <div className="absolute inset-0 pt-5 pl-5">
            <h1>{country.name}</h1>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CountryImageCard;
