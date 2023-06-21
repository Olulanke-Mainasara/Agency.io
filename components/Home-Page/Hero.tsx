"use client";

import { motion } from "framer-motion";
import React from "react";

import { images } from "../../static-data/images";
import ImageCardSm from "../UI/ImageCardSm";

const Hero = () => {
  return (
    <section className="flex flex-col min-h-screen pt-24 overflow-hidden xl:gap-16 xl:pt-0 xl:flex-row">
      <motion.div
        initial={{ opacity: 0, translateY: -30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.7, delay: 2.6 }}
        className="flex flex-col items-center justify-center gap-6 px-5 pb-10 text-center text-black xl:text-right xl:items-end xl:pr-0 basis-1/2 dark:text-white"
      >
        <h1 className="max-w-3xl text-6xl md:text-8xl text-brandDark dark:text-brandLight">
          Leave the planning to us
        </h1>
        <p className="max-w-2xl text-lg">
          With our powerful tools, you can find the perfect vacation for your
          budget and interests, book your flights, hotels, and activities all in
          one place, and get inspired by our curated travel guides.
        </p>
        <div className="flex justify-center w-full gap-5 xl:justify-end">
          <button className="px-6 py-3 text-lg text-white rounded-full bg-brandDark xl:px-8">
            Build your trip
          </button>
          <button className="px-6 py-3 text-lg text-black duration-300 border rounded-full dark:bg-transparent hover:bg-black hover:text-white hover:border-black dark:text-white border-brandDark dark:border-brandLight dark:hover:bg-white dark:hover:text-black dark:hover:border-white xl:px-8 w-fit">
            Get inspired
          </button>
        </div>
      </motion.div>
      <div className="relative flex items-center justify-center w-full xl:justify-start basis-1/2">
        <div className="grid grid-cols-2 gap-10">
          {images.map((image, index) => (
            <ImageCardSm key={image.id} imgsrc={image.imgsrc} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
