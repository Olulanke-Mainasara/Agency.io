"use client";

import React from "react";
import Image from "next/image";
import About1 from "@/public/Main/About1.webp";
import About2 from "@/public/Main/About2.webp";
import { motion } from "framer-motion";

import FBgButtons from "../UI/Links/FBgLink";

const Welcome = () => {
  const [hasViewed, setHasViewed] = React.useState(false);

  return (
    <section className="flex min-h-screen w-full flex-col gap-8 overflow-hidden dark:text-white md:grid md:min-h-fit md:grid-cols-4 md:grid-rows-3 lg:max-h-[900px] xl:h-screen xl:p-8">
      <motion.div
        initial={hasViewed ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
        onAnimationComplete={() => setHasViewed(true)}
        className="relative col-span-2 row-span-3 min-h-[300px] overflow-hidden rounded-xl"
      >
        <Image
          src={About1}
          placeholder="blur"
          fill
          sizes="(max-width: 1200px) 50vw, 33vw"
          quality={50}
          className="object-cover"
          alt="Beach umbrella with two seats"
        />
      </motion.div>

      <motion.div
        initial={hasViewed ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
        className="col-span-2 flex flex-col justify-center gap-y-5"
      >
        <p className="text-center text-lg md:text-left xl:text-2xl">
          Welcome to Agency.io, your ultimate guide and help for unforgettable
          travel experiences. We believe that every journey should be filled
          with wonder, excitement, and personalized attention.
        </p>
        <div className="flex justify-center md:justify-start">
          <FBgButtons />
        </div>
      </motion.div>

      <motion.div
        initial={hasViewed ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
        className="relative col-span-2 col-start-3 row-span-2 min-h-[300px] overflow-hidden rounded-xl"
      >
        <Image
          src={About2}
          placeholder="blur"
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          alt="Beach umbrella with two seats"
        />
      </motion.div>
    </section>
  );
};

export default Welcome;
