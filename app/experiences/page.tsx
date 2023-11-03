import { getExperiences } from "@/sanity/lib/getExperience(s)";
import { staticExperiencesData } from "@/static-data/images";

import Experiences from "@/components/UI/Sections/Experiences";

export default async function Experience() {
  let experiences;

  try {
    const queryResult = await getExperiences();
    experiences = queryResult;
  } catch (err) {
    experiences = staticExperiencesData;
  }

  return (
    <main className="mx-auto max-w-[1440px] space-y-8 px-6 pt-24 xl:px-8">
      <h1 className="text-center text-4xl dark:text-white md:text-7xl">
        Experiences
      </h1>

      <Experiences experiences={experiences} />
    </main>
  );
}
