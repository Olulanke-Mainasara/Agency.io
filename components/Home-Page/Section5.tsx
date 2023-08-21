import { locations } from "@/static-data/locationsAndExperiences";
import React from "react";

import { Button } from "../UI/ShadUI/button";

const Section5 = () => {
  return (
    <section className="flex flex-col w-full p-8 py-0 my-40 gap-8 xl:py-8 xl:min-h-screen">
      <h1 className="text-4xl text-center md:text-5xl">Popular Destinations</h1>

      <div className="flex justify-center gap-4">
        <Button variant={"outline"}>By Month</Button>
        <Button variant={"outline"}>By Season</Button>
      </div>

      <div className="h-full grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 grow">
        {locations.map((location) => {
          return (
            <div key={location.id} className="flex flex-col gap-5">
              <div className="w-full h-full bg-black min-h-[120px] max-h-[120px] md:min-h-[190px] md:max-h-[190px] xl:max-h-full dark:bg-white rounded-xl grow bg-reserved-100"></div>
              <div>
                <p className="text-2xl">{location.month}</p>
                <p>{location.destination}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section5;
