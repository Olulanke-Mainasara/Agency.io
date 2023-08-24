import { motion } from "framer-motion";
import React, { useState } from "react";

import { images } from "../../static-data/images";
import ImageCardSm from "../UI/Cards/ImageCardSm";
import FBgButtons from "../UI/Links/FBgLink";
import TBgButtons from "../UI/Links/TBgLink";

const CTA = () => {
  const [hasViewed, setHasViewed] = useState(false);

  return (
    <section className="flex w-full xl:py-8 min-h-fit">
      <div className="flex flex-col items-center overflow-hidden grow xl:gap-16 xl:flex-row">
        <motion.div
          initial={hasViewed ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onAnimationComplete={() => setHasViewed(true)}
          className="flex flex-col items-center justify-center gap-6 px-5 pb-10 text-center text-black xl:text-right xl:items-end xl:pr-0 basis-1/2 dark:text-white"
        >
          <h1 className="max-w-3xl text-5xl md:text-[90px] text-brandDark dark:text-brandLight">
            Leave the planning to us
          </h1>
          <p className="max-w-2xl sm:text-lg">
            With our powerful tools, you can find the perfect vacation for your
            budget and interests, book your flights, hotels, and activities all
            in one place, and get inspired by our curated travel guides.
          </p>
          <div className="flex justify-center w-full gap-5 xl:justify-end">
            <FBgButtons />
            <TBgButtons
              xPaddingAndText="px-6 xl:px-8 text-lg"
              yPadding="py-3"
              href="/experiences"
            >
              Get Inspired
            </TBgButtons>
          </div>
        </motion.div>
        <div className="relative flex items-center justify-center xl:justify-start basis-1/2 w-[612px]">
          <div className="grid grid-cols-2 gap-10">
            {images.map((image, index) => (
              <ImageCardSm key={image.id} imgsrc={image.imgsrc} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
