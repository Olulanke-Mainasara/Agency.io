import Image from "next/image";

import SearchImg from "@/public/Main/Search.webp";
import { activities } from "@/static-data/activities";
import { motion } from "framer-motion";
import React from "react";

import NBgButtons from "../UI/Links/NBgLink";
import TBgButtons from "../UI/Links/TBgLink";
import { DatePickerWithRange } from "../UI/Pickers/DataPickerWithRange";
import { LocationComboBox } from "../UI/Pickers/LocationComboBox";

const Search = ({
  loggedIn,
  displayName,
}: {
  loggedIn: boolean;
  displayName: string | null;
}) => {
  return (
    <section className="flex w-full min-h-screen p-6 lg:p-8 lg:gap-8">
      <div className="items-center justify-end hidden lg:flex lg:basis-1/2 ">
        <motion.div
          initial={{ opacity: 0, translateY: -30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.7, delay: 2.6 }}
          className="relative w-full overflow-hidden border border-black h-4/5 rounded-xl dark:border-white"
        >
          <Image
            src={SearchImg}
            priority
            placeholder="blur"
            fill
            alt="Plane taking off"
            sizes="(min-width: 0px) 25vw"
            className="object-cover"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.7, delay: 2.6 }}
        className="flex flex-col w-full gap-8 pt-16 lg:pt-0 lg:justify-center lg:basis-1/2"
      >
        <div className="flex gap-5 overflow-scroll dark:text-white md:flex-wrap activities">
          {activities.map((activity) => {
            return (
              <div key={activity.id}>
                <TBgButtons
                  xPaddingAndText="px-6"
                  yPadding="py-2"
                  href={activity.link}
                >
                  {activity.text}
                </TBgButtons>
              </div>
            );
          })}
          <NBgButtons prompt="View more" />
        </div>
        <h1 className="text-4xl md:text-5xl dark:text-white">
          {loggedIn
            ? `Where to next${
                displayName ? ", " + displayName.split(" ")[0] : null
              }?`
            : "Discover your next trip"}
        </h1>
        <div className="flex flex-col gap-5 md:flex-row">
          <LocationComboBox />
          <DatePickerWithRange />
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <LocationComboBox />
          <DatePickerWithRange />
        </div>
      </motion.div>
    </section>
  );
};

export default Search;
