import Image from "next/image";

import { destinations } from "@/static-data/images";
import { motion } from "framer-motion";
import React, { useState } from "react";

import NBgButtons from "../UI/Links/NBgLink";

const Section2 = () => {
  const [card, setCard] = useState(0);
  const [hasViewed, setHasViewed] = useState(false);

  const handleClick = (index: number) => {
    setCard(index);
  };

  return (
    <section className="flex flex-col w-full xl:min-h-screen gap-12 h-[630px] md:h-[900px] p-8 py-0 dark:text-white xl:py-8">
      <h1 className="text-4xl text-center md:text-5xl">
        Top Featured Destinations
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
                duration: 0.7,
                delay: 0.2 * index,
              }}
              onClick={() => handleClick(index)}
              className={`relative border rounded-xl overflow-hidden duration-500 min-w-[60vw] ease-out xl:min-w-[200px] ${
                card == index ? "grow" : "hover:cursor-pointer grow-0"
              }`}
              key={destination.id}
              onAnimationComplete={() => setHasViewed(true)}
            >
              <div className="relative w-full h-full border">
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
                    <NBgButtons prompt="view more" />
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

export default Section2;
