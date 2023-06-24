import { motion } from "framer-motion";
import React from "react";

import FBgButtons from "../UI/Buttons/FBgButtons";

const Section1 = () => {
  return (
    <section className="relative flex flex-col w-full min-h-screen gap-8 pb-0 xl:pb-8 p-8 my-40 overflow-hidden md:grid md:grid-rows-3 md:grid-cols-4 dark:text-white md:min-h-fit md:max-h-[728px]">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.7,
          },
        }}
        className="col-span-2 row-span-3 border border-black dark:border-white rounded-xl min-h-[300px]"
      ></motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
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
        <FBgButtons />
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.7,
          },
        }}
        className="col-span-2 col-start-3 row-span-2 border border-black rounded-xl dark:border-white min-h-[300px]"
      ></motion.div>
    </section>
  );
};

export default Section1;
