import Image from "next/image";

import Offer from "@/public/Main/Offer.webp";
import { services } from "@/static-data/services";
import { motion } from "framer-motion";
import React, { useState } from "react";

import NBgButtons from "../UI/Buttons/NBgButtons";

const Section3 = () => {
  const [hasViewed, setHasViewed] = useState(false);
  return (
    <section className=" w-full flex items-center pb-0 md:pb-8 p-8 xl:h-screen md:h-[900px] my-40 gap-8 overflow-hidden">
      <div className="flex flex-col gap-12 lg:basis-3/4 dark:text-white">
        <motion.h1
          initial={hasViewed ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.7,
            },
          }}
          onAnimationComplete={() => setHasViewed(true)}
          className="text-5xl"
        >
          What do we offer?
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-12 h-fit">
          {services.map((service) => {
            return (
              <motion.div
                initial={
                  hasViewed ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
                }
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                    delay: 0.2,
                  },
                }}
                className="flex flex-col justify-center w-full gap-y-5"
                key={service.id}
              >
                <h1 className="flex items-center gap-2 text-2xl">
                  <span className="text-brandLight">{service.icon}</span>
                  {service.topic}
                </h1>
                <p className="opacity-70">{service.text}</p>
                <NBgButtons prompt="Learn more" />
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
            duration: 0.7,
            delay: 0.2,
          },
        }}
        className="relative hidden h-full overflow-hidden border border-black dark:border-white basis-1/2 rounded-xl lg:block"
      >
        <Image
          src={Offer}
          placeholder="blur"
          fill
          className="object-cover"
          alt="Beach umbrella with two seats"
        />
      </motion.div>
    </section>
  );
};

export default Section3;
