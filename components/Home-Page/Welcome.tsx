import Image from "next/image";

import About1 from "@/public/Main/About1.webp";
import About2 from "@/public/Main/About2.webp";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useContext } from "react";

import { authContext } from "../Providers/Providers";
import FBgButtons from "../UI/Links/FBgLink";

const Welcome = () => {
  const [hasViewed, setHasViewed] = useState(false);
  const user = useContext(authContext);

  return (
    <section
      className={`relative ${
        user ? "hidden" : "flex md:grid"
      }  flex-col w-full min-h-screen gap-8 p-8 py-0 overflow-hidden xl:py-8 md:grid-rows-3 md:grid-cols-4 dark:text-white md:min-h-fit xl:min-h-screen`}
    >
      <motion.div
        initial={hasViewed ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.7,
          },
        }}
        onAnimationComplete={() => setHasViewed(true)}
        className="col-span-2 relative row-span-3 border border-black dark:border-white rounded-xl min-h-[300px] overflow-hidden"
      >
        <Image
          src={About1}
          placeholder="blur"
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
            duration: 1,
          },
        }}
        className="flex flex-col justify-center col-span-2 gap-y-5"
      >
        <h1 className="xl:text-2xl">
          Welcome to Agency.io, your ultimate guide and help for unforgettable
          travel experiences. We believe that every journey should be filled
          with wonder, excitement, and personalized attention.
        </h1>
        <div className="flex justify-end md:justify-start">
          <FBgButtons />
        </div>
      </motion.div>

      <motion.div
        initial={hasViewed ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.7,
          },
        }}
        className="col-span-2 relative col-start-3 row-span-2 border border-black rounded-xl dark:border-white min-h-[300px] overflow-hidden"
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
