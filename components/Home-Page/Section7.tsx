import { cities } from "@/static-data/locationsAndExperiences";
import React from "react";

const Section7 = () => {
  return (
    <section className="flex flex-col w-full min-h-screen gap-10 p-8 my-40">
      <h1 className="text-5xl text-right">Experience Nigeria from all sides</h1>

      <div className="grid h-full grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 grow">
        {cities.map((city) => {
          return (
            <div key={city.id} className="flex flex-col gap-5">
              <div className="w-full h-full bg-black dark:bg-white rounded-xl grow bg-reserved-100"></div>
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
