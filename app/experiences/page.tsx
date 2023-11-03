import { staticExperiencesData } from "@/static-data/images";

import getContent from "@/lib/getContent";
import Experiences from "@/components/UI/Sections/Experiences";
import { Experience } from "@/types/Experience";

export default async function Experience() {
  let experiences;

  try {
    const queryResult: Experience[] = await getContent("getExperiences", "", true);
    experiences = queryResult;
  } catch (err) {
    experiences = staticExperiencesData;
  }

  return (
    <main className="mx-auto max-w-[1440px] space-y-8 px-6 pt-24 xl:px-8">
      <h1 className="text-4xl text-center dark:text-white md:text-7xl">
        Experiences
      </h1>

      <Experiences experiences={experiences} />
    </main>
  );
}
