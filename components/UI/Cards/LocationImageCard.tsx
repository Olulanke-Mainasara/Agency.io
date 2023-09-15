"use client";

import Image from "next/image";
import Link from "next/link";

import Section1 from "@/public/Hero/Section1.jpeg";
import { motion } from "framer-motion";
import React from "react";

const LocationImageCard = ({
  continent,
  country,
  index,
  cols,
}: {
  continent: string;
  country: string;
  index: number;
  cols: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.2,
        },
      }}
      className={`h-[300px] border border-transparent dark:border-white rounded-xl overflow-hidden text-2xl xl:text-xl group ${
        cols == 2 ? "lg:col-span-2" : cols == 3 ? "lg:col-span-3" : ""
      }`}
    >
      <Link
        href={`/locations/${continent}/${country.split(" ").join("-")}`}
        className={`relative h-full`}
      >
        <div className="w-full h-full">
          <div className="relative w-full h-full duration-500 group-hover:scale-110">
            <Image
              src={Section1}
              width={314}
              height={305}
              placeholder="blur"
              className="object-cover w-full h-full"
              alt={country}
            />
          </div>

          <div className="absolute inset-0 pt-5 pl-5">
            <h1>{country}</h1>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default LocationImageCard;
