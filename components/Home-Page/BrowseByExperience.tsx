import React from "react";
import { staticExperiencesData } from "@/static-data/images";

import { Experience } from "@/types/Experience";
import getContent from "@/lib/getContent";

import BrowseExperienceButton from "../UI/Buttons/BrowseExperienceButton";
import Experiences from "../UI/Sections/Experiences";

const BrowseByExperience = async () => {
  let experiences;

  try {
    const queryResult: Experience[] = await getContent(
      "getExperiences",
      "",
      true
    );
    experiences = queryResult;
  } catch (err) {
    experiences = staticExperiencesData;
  }

  return (
    <section className="flex flex-col gap-8 px-6 xl:p-8">
      <h1 className="text-4xl md:text-5xl ">
        Browse by{" "}
        <span className="text-brandDark dark:text-brandLight">experience</span>{" "}
        type
      </h1>

      <Experiences experiences={experiences} />

      <Experiences experiences={experiences} sliced={9} />

      <Experiences experiences={experiences} sliced={6} />

      <BrowseExperienceButton />
    </section>
  );
};

export default BrowseByExperience;
