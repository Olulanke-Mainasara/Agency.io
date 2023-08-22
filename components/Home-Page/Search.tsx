import Image from "next/image";

import SearchImg from "@/public/Main/Search.webp";
import { activities } from "@/static-data/services";
import React from "react";

import { authContext } from "../Providers/Providers";
import { AIGeneratedTripForm } from "../UI/Forms/AIGeneratedTripForm";
import { BuildTripForm } from "../UI/Forms/BuildTripForm";
import ExploreTheWorldForm from "../UI/Forms/ExploreTheWorldForm";
import NBgButtons from "../UI/Links/NBgLink";
import TBgButtons from "../UI/Links/TBgLink";
import { Button } from "../UI/ShadUI/button";

const Search = () => {
  const [plan, setPlan] = React.useState("build");
  const user = React.useContext(authContext);

  const buttonData = [
    { id: 1, text: "Build your trip", plan: "build" },
    { id: 2, text: "Explore the world", plan: "explore" },
    {
      id: 3,
      text: user ? "No plan, use A.I" : "A.I Generated Trip",
      plan: "generate",
    },
  ];

  return (
    <section className="flex w-full p-6 xl:h-screen lg:p-8 lg:gap-8">
      <div className="items-center justify-end hidden lg:flex lg:basis-1/2 ">
        <div className="relative w-full overflow-hidden border border-black h-4/5 rounded-xl dark:border-white">
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
      <div className="flex flex-col w-full pt-16 gap-8 lg:pt-0 lg:justify-center lg:basis-1/2">
        <div className="flex overflow-scroll gap-5 dark:text-white md:flex-wrap activities">
          <Button
            variant={"outline"}
            className="px-6 py-2 text-white bg-black border-black dark:bg-white dark:text-black dark:border-white"
          >
            All
          </Button>

          {activities.map((activity, index) => {
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
          {user
            ? `What's the plan${
                user.displayName ? ", " + user.displayName.split(" ")[0] : ""
              }?`
            : "Discover your next adventure"}
        </h1>

        <div className="flex flex-wrap gap-4">
          {buttonData.map((button) => (
            <Button
              key={button.id}
              variant={"outline"}
              className={`py-3 ${
                plan === button.plan
                  ? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white"
                  : ""
              }`}
              onClick={() => setPlan(button.plan)}
            >
              {button.text}
            </Button>
          ))}
        </div>

        {plan === "build" && <BuildTripForm />}

        {plan === "explore" && <ExploreTheWorldForm />}

        {plan === "generate" && <AIGeneratedTripForm />}
      </div>
    </section>
  );
};

export default Search;
