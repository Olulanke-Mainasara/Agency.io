"use client";

import React from "react";
import Image from "next/image";
import { destinations } from "@/static-data/destinations";
import { motion } from "framer-motion";

import useMedia from "@/hooks/useMedia";

import NBgButtons from "../UI/Links/NBgLink";

const TopFeaturedDestinations = () => {
  const [card, setCard] = React.useState(0);
  const [hasViewed, setHasViewed] = React.useState(false);
  const isMobile = useMedia("(max-width: 1024px)");

  const handleClick = (index: number) => {
    setCard(index);
  };

  return (
    <section className="flex h-[600px] flex-col gap-8 px-6 dark:text-white md:h-[700px] lg:h-[800px] xl:h-[700px] xl:p-8">
      <h1 className="text-center text-4xl md:text-5xl">
        Top{" "}
        <span className="text-brandDark dark:text-brandLight">Featured</span>{" "}
        Destinations
      </h1>

      <div className="flex w-full grow gap-8 overflow-y-hidden overflow-x-scroll text-white">
        {destinations.map((destination, index) => {
          return (
            <motion.div
              initial={
                hasViewed || isMobile
                  ? { y: 0, opacity: 1 }
                  : { y: 100, opacity: 0 }
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
              className={`relative min-w-[60vw] overflow-hidden rounded-xl duration-500 ease-out xl:min-w-[200px] ${
                card == index ? "grow" : "grow-0 hover:cursor-pointer"
              }`}
              key={destination.id}
              onAnimationComplete={() => setHasViewed(true)}
            >
              <div className="relative h-full w-full">
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
                } absolute inset-0 pl-5 pt-5 duration-500`}
              >
                <h1
                  className={`${
                    card == index
                      ? "text-3xl md:text-5xl"
                      : "text-3xl md:text-5xl xl:text-xl"
                  } flex flex-col gap-2 duration-300`}
                >
                  {destination.destination}
                  <span
                    className={`${
                      card == index ? "opacity-100" : "xl:opacity-0"
                    } text-base duration-300`}
                  >
                    <NBgButtons
                      prompt="view more"
                      href={`/location/${destination.slug}`}
                      extraStyles="text-white"
                    />
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
