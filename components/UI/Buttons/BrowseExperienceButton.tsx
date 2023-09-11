"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

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
      <Button className="md:w-[300px]" variant={"plain"} size={"sm"}>
        <Link href={"/experiences"} prefetch={false}>
          View all
        </Link>
        <span className="dark:text-brandDark text-brandLight">
          <ArrowRight size={20} />
        </span>
      </Button>
    </motion.span>
  );
};

export default BrowseExperienceButton;
