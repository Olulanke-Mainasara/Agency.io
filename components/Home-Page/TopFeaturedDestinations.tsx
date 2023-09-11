"use client";

import Image from "next/image";

import { destinations } from "@/static-data/images";
import { motion } from "framer-motion";
import React from "react";

import NBgButtons from "../UI/Links/NBgLink";

const TopFeaturedDestinations = () => {
  const [card, setCard] = React.useState(0);
  const [hasViewed, setHasViewed] = React.useState(false);

  const handleClick = (index: number) => {
    setCard(index);
  };

  return (
    <section className="flex flex-col lg:h-[800px] gap-8 h-[600px] xl:h-[700px] md:h-[700px] px-6 xl:p-8 dark:text-white">
      <h1 className="text-4xl text-center md:text-5xl">
        Top{" "}
        <span className="text-brandDark dark:text-brandLight">Featured</span>{" "}
        Destinations
      </h1>

      <div className="flex w-full gap-8 overflow-x-scroll overflow-y-hidden text-white grow">
        {destinations.map((destination, index) => {
          return (
            <motion.div
              initial={
                hasViewed ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
              }
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.2,
                delay: 0.2 * index,
              }}
              onClick={() => handleClick(index)}
              className={`relative rounded-xl overflow-hidden duration-500 min-w-[60vw] ease-out xl:min-w-[200px] ${
                card == index ? "grow" : "hover:cursor-pointer grow-0"
              }`}
              key={destination.id}
              onAnimationComplete={() => setHasViewed(true)}
            >
              <div className="relative w-full h-full">
                <Image
                  className="object-cover"
                  src={destination.imgsrc}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={90}
                  placeholder="blur"
                  alt={destination.destination}
                />
              </div>

              <div
                className={`${
                  card !== index
                    ? "backdrop-brightness-[80%] xl:backdrop-brightness-50"
                    : "backdrop-brightness-[80%]"
                } duration-500 absolute inset-0 pt-5 pl-5`}
              >
                <h1
                  className={`${
                    card == index
                      ? "text-3xl md:text-5xl"
                      : "text-3xl md:text-5xl xl:text-xl"
                  } duration-300 flex flex-col gap-2`}
                >
                  {destination.destination}
                  <span
                    className={`${
                      card == index ? "opacity-100" : "xl:opacity-0"
                    } text-base duration-300`}
                  >
                    <NBgButtons prompt="view more" href="#" />
                  </span>
                </h1>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TopFeaturedDestinations;
