import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Section1 = () => {
  return (
    <section className="relative grid w-full h-screen grid-cols-3 grid-rows-2 gap-8 my-40 dark:text-white xl:p-8">
      <div className="row-span-2 border border-black dark:border-white rounded-xl"></div>

      <div className="flex flex-col justify-center col-span-2 gap-y-5">
        <h1 className="text-4xl">
          Welcome to Agency.io, your ultimate guide and help for unforgettable
          travel experiences. We believe that every journey should be filled
          with wonder, excitement, and personalized attention.
        </h1>
        <button className="px-6 py-3 text-lg text-white rounded-full bg-brandDark xl:px-8 w-fit">
          Build your trip
        </button>
      </div>

      <div className="col-span-2 col-start-2 border border-black rounded-xl dark:border-white"></div>
    </section>
  );
};

export default Section1;
