import { motion } from "framer-motion";
import React from "react";
import { FaPlane } from "react-icons/fa";

const Splash = () => {
  const width = window.innerWidth;
  return (
    <motion.div animate={{ display: "none", transition: { delay: 2.8 } }}>
      <motion.div
        animate={{
          opacity: 0,
          transition: { duration: 0.7, delay: 2 },
        }}
        className="absolute inset-0 w-screen h-screen bg-white dark:bg-[#111111] z-40 flex items-center justify-center"
      >
        <motion.div
          animate={{ opacity: 0, transition: { delay: 1.5 } }}
          className="flex items-center justify-center p-5 text-5xl text-black border md:p-10 md:text-8xl dark:text-white rounded-xl border-brandDark lg:text-9xl"
        >
          <motion.h1
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: width > 1023 ? 620 : width > 767 ? 470 : 235,
              opacity: 1,
              transition: { duration: 1.5, ease: "anticipate" },
            }}
            className="overflow-hidden h-[56px] md:h-28 lg:h-[150px]"
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
