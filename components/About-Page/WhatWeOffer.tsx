"use client";

import React from "react";
import Image from "next/image";
import Offer from "@/public/Main/Offer.webp";
import { features } from "@/static-data/services";
import { motion } from "framer-motion";

const WhatWeOffer = () => {
  const [hasViewed, setHasViewed] = React.useState(false);

  return (
    <section className="flex items-center gap-8 overflow-hidden md:h-[900px] lg:max-h-[900px] xl:h-screen xl:p-8">
      <div className="flex flex-col gap-8 dark:text-white lg:basis-3/4">
        <motion.h1
          initial={hasViewed ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          }}
          onAnimationComplete={() => setHasViewed(true)}
          className="text-4xl md:text-5xl"
        >
          What do we{" "}
          <span className="text-brandDark dark:text-brandLight">offer</span>?
        </motion.h1>
        <div className="grid h-fit gap-x-10 gap-y-12 md:grid-cols-2">
          {features.map((feature) => {
            return (
              <motion.div
                initial={
                  hasViewed ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
                }
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                    delay: 0.2,
                  },
                }}
                className="flex w-full flex-col justify-center gap-y-5"
                key={feature.id}
              >
                <h1 className="flex items-center gap-2 text-2xl">
                  <span className="text-brandDark dark:text-brandLight">
                    {feature.icon}
                  </span>
                  {feature.topic}
                </h1>
                <p className="opacity-70">{feature.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <motion.div
        initial={hasViewed ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
            delay: 0.2,
          },
        }}
        className="relative hidden h-full basis-1/2 overflow-hidden rounded-xl lg:block"
      >
        <Image
          src={Offer}
          placeholder="blur"
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={90}
          className="object-cover"
          alt="Beach umbrella with two seats"
        />
      </motion.div>
    </section>
  );
};

export default WhatWeOffer;
