import { cities } from "@/static-data/images";
import React from "react";
import { useContext } from "react";

import { locationContext } from "../Providers/Providers";
import Carousel from "../UI/Carousel/Carousel";

const ExperienceYourLocal = () => {
  const location = useContext(locationContext);
  
  return (
    <section className="flex flex-col gap-8 xl:py-8">
      <h1 className="px-6 text-4xl text-right xl:px-8 md:text-5xl">
        Experience{" "}
        <span className="text-brandDark dark:text-brandLight">Nigeria</span>{" "}
        from <span className="text-brandDark dark:text-brandLight">all</span>{" "}
        sides
      </h1>

      <Carousel items={cities} />
    </section>
  );
};

export default ExperienceYourLocal;
