"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import NBgLink from "../Links/NBgLink";

type Features = {
  id: number;
  title: string;
  description: string;
  href: string;
  icon: React.JSX.Element;
};

const DefaultCard = ({
  features,
  index,
}: {
  features: Features;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.2,
          delay: index * 0.15,
        },
      }}
      className="space-y-2 rounded-xl border border-black p-6 duration-300 hover:border-brandLight dark:border-white dark:hover:border-brandLight xl:p-7"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl text-brandDark dark:text-brandLight">
            {features.icon}
          </span>
          <p className="text-xl text-black dark:text-white">{features.title}</p>
        </div>
        <NBgLink
          prompt="view"
          href={features.href}
          extraStyles="text-base justify-end"
        />
      </div>

      <p className="text-lg text-black opacity-70 dark:text-white">
        {features.description}
      </p>
    </motion.div>
  );
};

export default DefaultCard;
