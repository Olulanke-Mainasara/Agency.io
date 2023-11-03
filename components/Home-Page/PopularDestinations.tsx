"use client";

import React from "react";

import PopularDestinationsByMonth from "../UI/Sections/PopularDestinationsByMonth";
import PopularDestinationsBySeason from "../UI/Sections/PopularDestinationsBySeason";
import { Button } from "../UI/ShadUI/button";

const buttonData = [
  { id: 1, text: "By Month", by: "month" },
  { id: 2, text: "By Season", by: "season" },
];

const PopularDestinations = () => {
  const [by, setBy] = React.useState("month");

  return (
    <section className="flex flex-col gap-8 xl:py-8">
      <div className="flex flex-col gap-8 px-6 lg:flex-row lg:gap-4 xl:px-8">
        <h1 className="text-4xl md:text-5xl">
          Popular{" "}
          <span className="text-brandDark dark:text-brandLight">
            Destinations
          </span>
        </h1>

        <div className="flex gap-4">
          {buttonData.map((button) => (
            <Button
              key={button.id}
              variant={"outline"}
              className={`${
                by === button.by
                  ? "border-black bg-background text-white dark:border-white dark:bg-white dark:text-black"
                  : ""
              }`}
              onClick={() => setBy(button.by)}
            >
              {button.text}
            </Button>
          ))}
        </div>
      </div>

      {by === "month" ? (
        <PopularDestinationsByMonth />
      ) : (
        <PopularDestinationsBySeason />
      )}
    </section>
  );
};

export default PopularDestinations;
