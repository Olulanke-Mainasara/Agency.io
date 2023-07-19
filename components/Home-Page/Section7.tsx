import { cities } from "@/static-data/locationsAndExperiences";
import React from "react";

const Section7 = () => {
  return (
    <section className="flex flex-col w-full p-8 py-0 my-40 gap-10 xl:py-8 xl:min-h-screen">
      <h1 className="text-4xl text-right md:text-5xl">
        Experience Nigeria from all sides
      </h1>

      <div className="h-full grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 grow">
        {cities.map((city) => {
          return (
            <div key={city.id} className="flex flex-col gap-5">
              <div className="w-full h-full bg-black min-h-[120px] max-h-[120px] md:min-h-[190px] md:max-h-[190px] xl:max-h-full dark:bg-white rounded-xl grow bg-reserved-100"></div>
              <div>
                <p className="text-2xl">{city.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section7;
