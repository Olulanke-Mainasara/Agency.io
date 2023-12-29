"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Features = {
  id: number;
  title: string;
  description: string;
  href: string;
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
      className="rounded-xl border border-black duration-300 hover:border-brandLight dark:border-white dark:hover:border-brandLight"
    >
      <Link
        href={features.href}
        prefetch={false}
        className="h-full w-full space-y-2 p-6 xl:p-8"
      >
        <p className="text-xl text-black dark:text-white">{features.title}</p>
        <p className="text-lg text-black opacity-70 dark:text-white">
          {features.description}
        </p>
      </Link>
    </motion.div>
  );
};

export default DefaultCard;
