import Image from "next/image";

import SearchImg from "@/public/Main/Search.webp";
import { activities } from "@/static-data/services";
import { motion } from "framer-motion";
import { useState } from "react";

import { AIGeneratedTripForm } from "../UI/Forms/AIGeneratedTripForm";
import { BuildTripForm } from "../UI/Forms/BuildTripForm";
import ExploreTheWorldForm from "../UI/Forms/ExploreTheWorldForm";
import NBgButtons from "../UI/Links/NBgLink";
import TBgButtons from "../UI/Links/TBgLink";
import { Button } from "../UI/ShadUI/button";

const Search = ({
  loggedIn,
  displayName,
}: {
  loggedIn: boolean;
  displayName: string | null;
}) => {
  const [plan, setPlan] = useState("build");

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
            placeholder="blur"
            fill
            quality={90}
            alt="Plane taking off"
            className="object-cover"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.7, delay: 2.6 }}
        className="flex flex-col w-full pt-16 gap-8 lg:pt-0 lg:justify-center lg:basis-1/2"
      >
        <div className="flex overflow-scroll gap-5 dark:text-white md:flex-wrap activities">
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
            ? `What's the plan${
                displayName ? ", " + displayName.split(" ")[0] : ""
              }?`
            : "Discover your next adventure"}
        </h1>

        <div className="flex flex-wrap gap-4">
          <Button
            variant={"outline"}
            className={`py-3 ${
              plan === "build"
                ? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white"
                : ""
            }`}
            onClick={() => setPlan("build")}
          >
            Build your trip
          </Button>

          <Button
            variant={"outline"}
            className={`py-3 ${
              plan === "explore"
                ? "bg-black text-white border-white dark:bg-white dark:text-black dark:border-white"
                : ""
            }`}
            onClick={() => setPlan("explore")}
          >
            Explore the world
          </Button>

          <Button
            variant={"outline"}
            className={`py-3 ${
              plan === "generate"
                ? "bg-black text-white dark:bg-white dark:text-black dark:border-white"
                : ""
            }`}
            onClick={() => setPlan("generate")}
          >
            {loggedIn ? "No plan, use A.I" : "A.I Generated Trip"}
          </Button>
        </div>

        {plan === "build" && <BuildTripForm />}

        {plan === "explore" && <ExploreTheWorldForm />}

        {plan === "generate" && <AIGeneratedTripForm />}
      </motion.div>
    </section>
  );
};

export default Search;
