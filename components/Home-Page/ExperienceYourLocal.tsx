import { cities } from "@/static-data/images";
import React from "react";

import DefaultCarousel from "../UI/Carousel/DefaultCarousel";

const ExperienceYourLocal = async () => {
  let countryName;

  try {
    const ipDataResponse = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipDataResponse.json();
    const ip = ipData.ip;

    const locationResponse = await fetch(
      `http://api.ipstack.com/${ip}?access_key=${process.env.IPSTACK_API_KEY}`
    );
    const locationData = await locationResponse.json();

    countryName = locationData.country_name;
  } catch (error) {
    countryName = "your country";
  }

  return (
    <section className="flex flex-col gap-8 xl:py-8">
      <h1 className="px-6 text-4xl text-right xl:px-8 md:text-5xl">
        Experience{" "}
        <span className="text-brandDark dark:text-brandLight">
          {countryName}
        </span>{" "}
        from all sides
      </h1>

      <DefaultCarousel items={cities} />
    </section>
  );
};

export default ExperienceYourLocal;
