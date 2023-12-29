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
    <motion.span
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.2,
          delay: index * 0.15,
        },
      }}
      className="rounded-xl border border-black p-6 duration-300 hover:border-brandLight dark:border-white dark:hover:border-brandLight xl:p-8"
    >
      <Link
        href={features.href}
        prefetch={false}
        className="h-full w-full space-y-2"
      >
        <p className="text-xl text-black dark:text-white">{features.title}</p>
        <p className="text-lg text-black opacity-70 dark:text-white">
          {features.description}
        </p>
      </Link>
    </motion.span>
  );
};

export default DefaultCard;
