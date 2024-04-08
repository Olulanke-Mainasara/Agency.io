"use client";

import React from "react";
import { whyJoinUs } from "@/static-data/services";
import { motion } from "framer-motion";

const WhyJoinUs = () => {
  const [cardsVisible, setCardsVisible] = React.useState(false);

  return (
    <section className="flex flex-col gap-8 px-6 xl:px-8">
      <h1 className="text-center text-4xl md:text-5xl">
        Why <span className="text-brandDark">work</span> with us?
      </h1>

      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        onAnimationComplete={() => setCardsVisible(true)}
        className="grid grid-cols-1 gap-8 gap-y-10 md:grid-cols-2 xl:grid-cols-4"
      >
        {whyJoinUs.map((reason, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              cardsVisible
                ? {
                    opacity: 1,
                    transition: {
                      duration: 0.2,
                      delay: index * 0.15,
                    },
                  }
                : {
                    opacity: 0,
                    transition: { duration: 0.1, delay: index * 0.1 },
                  }
            }
            className="flex w-full flex-col items-center justify-center gap-y-2 rounded-xl border border-black p-6 text-center dark:border-gray-400"
            key={reason.id}
          >
            <span className="text-4xl text-brandDark dark:text-brandLight">
              {reason.icon}
            </span>
            <h1 className="flex items-center gap-2 text-2xl">{reason.title}</h1>
            <p className="opacity-70">{reason.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyJoinUs;
