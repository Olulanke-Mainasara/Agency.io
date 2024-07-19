"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Country } from "@/types/Country";

import NBgLink from "../Links/NBgLink";

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
      className={`group h-[300px] overflow-hidden rounded-xl border border-transparent text-2xl dark:border-gray-400 xl:col-span-2 xl:text-xl ${
        cols == 2 ? "lg:col-span-2" : cols == 3 ? "lg:col-span-3" : ""
      }`}
    >
      <div className="relative h-full w-full">
        <div className="relative h-full w-full duration-500 group-hover:scale-110">
          <Image
            src={country.displayImage.url}
            width={314}
            height={305}
            className="h-full w-full object-cover"
            alt={country.displayImage.alt ? country.displayImage.alt : ""}
          />
        </div>

        <div className="absolute inset-0 pl-5 pt-5 backdrop-brightness-[60%]">
          <h1>{country.name}</h1>
        </div>

        <div className="absolute bottom-0 flex w-full justify-end pb-5 pr-5">
          <NBgLink
            prompt="visit"
            href={`/places/${continent}/${country.slug}`}
            extraStyles="justify-end"
            linkStyles="w-fit text-2xl md:text-xl"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CountryImageCard;
