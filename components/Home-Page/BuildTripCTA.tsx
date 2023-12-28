"use client";

import React from "react";
import { motion } from "framer-motion";

import { images } from "../../static-data/images";
import BuildTripCTACard from "../UI/Cards/BuildTripCTACard";
import FBgButtons from "../UI/Links/FBgLink";
import TBgButtons from "../UI/Links/TBgLink";

const BuildTripCTA = () => {
  const [hasViewed, setHasViewed] = React.useState(false);

  return (
    <section className="flex flex-col items-center justify-between overflow-hidden xl:flex-row xl:py-8">
      <motion.div
        initial={hasViewed ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onAnimationComplete={() => setHasViewed(true)}
        className="flex basis-1/2 flex-col items-center justify-center gap-6 px-5 pb-10 text-center text-black dark:text-white xl:items-end xl:pr-0 xl:text-right"
      >
        <h1 className="max-w-3xl text-5xl text-brandDark dark:text-brandLight md:text-[90px]">
          Leave the planning to us
        </h1>
        <p className="max-w-2xl sm:text-lg">
          With our powerful tools, you can find the perfect vacation for your
          budget and interests, book your flights, hotels, and activities all in
          one place, and get inspired by our curated travel guides.
        </p>
        <div className="flex w-full justify-center gap-5 xl:justify-end">
          <FBgButtons />
          <TBgButtons href="/experiences">Get Inspired</TBgButtons>
        </div>
      </motion.div>

      <div className="relative flex w-[612px] basis-1/2 items-center justify-center">
        <div className="grid grid-cols-2 gap-10">
          {images.map((image, index) => (
            <BuildTripCTACard
              key={image.id}
              imgsrc={image.imgsrc}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildTripCTA;
