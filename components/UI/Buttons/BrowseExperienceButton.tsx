"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "../ShadUI/button";

const BrowseExperienceButton = () => {
  const [hasViewed, setHasViewed] = React.useState(false);

  return (
    <motion.span
      initial={hasViewed ? { opacity: 1 } : { opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.3,
        },
      }}
      onAnimationComplete={() => setHasViewed(true)}
      className="mx-auto"
    >
      <Button className="md:w-[300px]" variant={"plain"} size={"sm"} asChild>
        <Link
          href={"/experiences"}
          prefetch={false}
          className="group flex items-center justify-center gap-1"
        >
          View all
          <span className="text-brandLight duration-300 group-hover:translate-x-1 dark:text-brandDark">
            <ArrowRight size={20} />
          </span>
        </Link>
      </Button>
    </motion.span>
  );
};

export default BrowseExperienceButton;
