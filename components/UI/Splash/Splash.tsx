"use client";

import { motion } from "framer-motion";
import React from "react";
import { FaPlane } from "react-icons/fa";

const Splash = () => {
  return (
    <motion.div animate={{ display: "none", transition: { delay: 2.8 } }}>
      <motion.div
        animate={{
          opacity: 0,
          transition: { duration: 0.7, delay: 2 },
        }}
        className="absolute inset-0 w-screen h-screen bg-white dark:bg-[#111111] z-40 flex items-center justify-center overflow-hidden"
      >
        <motion.div
          animate={{ opacity: 0, transition: { delay: 1.5 } }}
          className="flex items-center justify-center overflow-hidden text-white border rounded-xl border-brandDark text-9xl"
        >
          <div className="flex items-center justify-center m-10 text-black dark:text-white">
            <motion.h1
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: 610,
                opacity: 1,
                transition: { duration: 1.5, ease: "anticipate" },
              }}
              className="overflow-hidden h-36"
            >
              Agency<span className="text-brandDark">.io</span>&nbsp;
            </motion.h1>

            <div>
              <FaPlane />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Splash;
