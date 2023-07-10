import Image from "next/image";
import Link from "next/link";

import Section1 from "@/public/Hero/Section1.jpeg";
import React from "react";

const LocationImageCard = ({
  continent,
  country,
  rows,
  cols,
}: {
  continent: string;
  country: string;
  rows: number;
  cols: number;
}) => {
  return (
    <Link
      href={`/continents/${continent}/${country}`}
      className={`relative min-h-[350px] border border-black dark:border-white rounded-xl overflow-hidden text-xl group ${
        rows == 1
          ? "row-span-1"
          : rows == 2
          ? "row-span-2"
          : rows >= 3
          ? "row-span-3"
          : ""
      } ${
        cols == 1
          ? "col-span-1"
          : cols == 2
          ? "col-span-2"
          : cols >= 3
          ? "col-span-3"
          : ""
      }`}
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
  );
};

export default LocationImageCard;
