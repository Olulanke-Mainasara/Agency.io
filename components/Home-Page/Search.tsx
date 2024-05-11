"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import SearchImg from "@/public/Main/Search.webp";
import { activities } from "@/static-data/services";

import { authContext } from "../Providers/Providers";
import NBgLink from "../UI/Links/NBgLink";
import TBgLink from "../UI/Links/TBgLink";
import { Button } from "../UI/ShadUI/button";

const BuildTripForm = dynamic(() => import("../UI/Forms/BuildTripForm"));
const ExploreTheWorldForm = dynamic(
  () => import("../UI/Forms/ExploreTheWorldForm")
);
const AIGeneratedTripForm = dynamic(
  () => import("../UI/Forms/AIGeneratedTripForm")
);

const Search = () => {
  const [plan, setPlan] = React.useState("explore");
  const user = React.useContext(authContext);

  const buttonData = [
    { id: 1, text: "Explore the world", plan: "explore" },
    { id: 2, text: "Build your trip", plan: "build" },
    { id: 3, text: "A.I Generate", plan: "generate" },
  ];

  return (
    <section className="flex w-full p-4 pb-0 lg:max-h-[900px] lg:gap-8 lg:p-8 lg:pb-0 xl:h-screen">
      <div className="hidden items-center justify-end xl:flex xl:basis-1/2 ">
        <div className="relative h-4/5 w-full overflow-hidden rounded-xl">
          <Image
            src={SearchImg}
            placeholder="blur"
            fill
            quality={90}
            alt="Plane taking off"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-8 pt-16 md:pt-28 xl:basis-1/2 xl:items-start xl:justify-center xl:pt-0">
        <div className="activities flex max-w-3xl flex-wrap justify-center gap-5 overflow-scroll dark:text-white xl:justify-start">
          <Button
            variant={"outline"}
            className="border-black bg-background px-6 py-2 text-white dark:border-white dark:bg-white dark:text-black"
          >
            All
          </Button>

          {activities.map((activity) => {
            return (
              <React.Fragment key={activity.id}>
                <TBgLink extraStyles="py-2" href={activity.link}>
                  {activity.text}
                </TBgLink>
              </React.Fragment>
            );
          })}

          <NBgLink prompt="View more" href="/services" />
        </div>

        {user === undefined ? (
          <div className="h-12 w-80 animate-pulse bg-gray-400 md:w-[600px]"></div>
        ) : user ? (
          <p className="text-center text-[26px] dark:text-white md:text-5xl">
            What&apos;s the{" "}
            <span className="text-brandDark dark:text-brandLight">plan</span>
            {user.displayName ? ", " + user.displayName.split(" ")[0] : ""}?
          </p>
        ) : (
          <p className="text-center text-2xl dark:text-white md:text-5xl">
            Discover your{" "}
            <span className="text-brandDark dark:text-brandLight">next</span>{" "}
            adventure
          </p>
        )}

        <div className="flex flex-wrap gap-4">
          {buttonData.map((button) => (
            <Button
              key={button.id}
              variant={"outline"}
              size={"sm"}
              className={`${
                plan === button.plan
                  ? "border-black bg-background text-white dark:border-white dark:bg-white dark:text-black"
                  : ""
              }`}
              onClick={() => setPlan(button.plan)}
            >
              <span className="md:hidden">
                {button.plan === "generate"
                  ? "A.I Gen"
                  : button.text.split(" ")[0]}
              </span>
              <span className="hidden md:block">{button.text}</span>
            </Button>
          ))}
        </div>

        {plan === "explore" && <ExploreTheWorldForm />}

        {plan === "build" && <BuildTripForm />}

        {plan === "generate" && <AIGeneratedTripForm />}
      </div>
    </section>
  );
};

export default Search;
