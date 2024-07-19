"use client";

import React from "react";
import Link from "next/link";
import { availablePositions } from "@/static-data/services";
import { motion } from "framer-motion";
import { DollarSignIcon } from "lucide-react";
import { FaBriefcase } from "react-icons/fa";

const AvailablePositions = () => {
  const [cardsVisible, setCardsVisible] = React.useState(false);
  return (
    <section
      className="flex scroll-mt-24 flex-col gap-8 px-6 xl:px-8"
      id="availablePositions"
    >
      <h1 className="text-center text-4xl md:text-5xl">
        Available <span className="text-brandDark">positions!</span>
      </h1>

      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        onAnimationComplete={() => setCardsVisible(true)}
        className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 xl:gap-10"
      >
        {availablePositions.map((position, index) => (
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
            className="flex w-full flex-col gap-y-5 rounded-xl border border-black p-6 dark:border-gray-400 xl:gap-y-8"
            key={position.id}
          >
            <div className="flex flex-col justify-between gap-3 xl:flex-row">
              <p className="flex items-center gap-4 text-2xl">
                <span>
                  <FaBriefcase />
                </span>
                {position.title}
              </p>

              <p className="flex items-center gap-2 text-2xl">
                <span>
                  <DollarSignIcon />
                </span>
                {position.pay}{" "}
                <span className="text-base opacity-70">/Year</span>
              </p>
            </div>

            <p className="hidden opacity-70 first-letter:text-4xl lg:block">
              {position.description}
            </p>

            <div className="flex flex-col justify-between gap-6 xl:flex-row">
              <div className="flex flex-wrap gap-4">
                <div className="rounded-full border border-brandDark px-5 py-3 dark:text-white">
                  {position.category}
                </div>
                <div className="rounded-full border border-brandDark px-5 py-3 dark:text-white">
                  {position.type}
                </div>
                <div className="rounded-full border border-brandDark px-5 py-3 dark:text-white">
                  {position.location}
                </div>
              </div>

              <Link
                href={`/company/career/${position.slug}`}
                className="rounded-full bg-brandDark px-5 py-3 text-center text-white transition-colors hover:bg-[#195854]"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AvailablePositions;
