"use client";

import Image from "next/image";
import Link from "next/link";

import Section1 from "@/public/Hero/Section1.jpeg";
import { motion } from "framer-motion";
import React from "react";

const LocationImageCard = ({
  continent,
  country,
  rows,
  cols,
  index,
}: {
  continent: string;
  country: string;
  rows: number;
  cols: number;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: index < 7 ? index * 0.2 : 0.2,
        },
      }}
      className={`min-h-[350px] border border-black dark:border-white rounded-xl overflow-hidden text-2xl xl:text-xl group ${
        rows == 1
          ? "xl:row-span-1"
          : rows == 2
          ? "xl:row-span-2"
          : rows >= 3
          ? "xl:row-span-3"
          : ""
      } ${
        cols == 1
          ? "xl:col-span-1"
          : cols == 2
          ? "xl:col-span-2"
          : cols >= 3
          ? "xl:col-span-3"
          : ""
      }`}
    >
      <Link
        href={`/continents/${continent}/${country}`}
        className={`relative h-full`}
      >
        <div className="w-full h-full">
          <div className="relative w-full h-full duration-500 group-hover:scale-110">
            <Image
              src={Section1}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              className="object-cover"
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
