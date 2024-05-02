import React from "react";
import { motion } from "framer-motion";
import { FaPlane } from "react-icons/fa";

const Splash = () => {
  const width = typeof window !== "undefined" ? window.innerWidth : 0;

  return (
    <motion.div
      animate={{ display: "none", transition: { delay: 2.8 } }}
      className="absolute inset-0 z-40"
    >
      <motion.div
        animate={{
          opacity: 0,
          transition: { duration: 0.7, delay: 2 },
        }}
        className="flex h-full items-center justify-center bg-white dark:bg-background"
      >
        <motion.div
          animate={{ opacity: 0, transition: { delay: 1.5 } }}
          className="flex items-center justify-center rounded-xl border border-brandDark p-5 text-5xl text-black dark:text-white md:p-10 md:text-8xl lg:text-9xl"
        >
          <motion.h1
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: width > 1023 ? 555 : width > 767 ? 425 : 215,
              opacity: 1,
              transition: { duration: 1.5, ease: "anticipate" },
            }}
            className="h-[56px] overflow-hidden md:h-28 lg:h-[150px]"
          >
            Agency<span className="text-brandDark">.io</span>&nbsp;
          </motion.h1>

          <div>
            <FaPlane />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Splash;
