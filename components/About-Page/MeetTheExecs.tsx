"use client";

import React from "react";
import { execs } from "@/static-data/images";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import PersonnelCard from "../UI/Cards/PersonnelCard";

const MeetTheExecs = () => {
  const [cardsVisible, setCardsVisible] = React.useState(false);

  return (
    <section className="flex flex-col gap-8 px-6 py-0 xl:p-8">
      <div className="flex items-center justify-end gap-1">
        <h1 className="text-right text-4xl md:text-5xl">Meet the Execs</h1>
        <ArrowDown size={40} className="text- text-brandDark" />
      </div>

      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        onAnimationComplete={() => setCardsVisible(true)}
        className="grid grid-cols-1 gap-8 gap-y-10 md:grid-cols-2 xl:grid-cols-4"
      >
        {execs.map((personnel, index) => (
          <PersonnelCard
            key={personnel.id}
            personnel={personnel}
            index={index}
            start={cardsVisible}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default MeetTheExecs;
