import { getExperiences } from "@/sanity/lib/getExperience(s)";

import { Experience } from "@/types/Experience";
import Experiences from "@/components/UI/Sections/Experiences";

export default async function ExperiencePage() {
  let experiences: Experience[];

  try {
    const queryResult = await getExperiences();
    experiences = queryResult;
  } catch (err) {
    experiences = [];
  }

  return (
    <main className="mx-auto max-w-[1440px] space-y-8 px-6 pt-20 lg:pt-24 xl:px-8">
      <h1 className="text-center text-6xl dark:text-white md:text-7xl">
        Experiences
      </h1>

      {experiences.length === 0 ? (
        <div className="flex h-[300px] w-full items-center justify-center gap-4 rounded-xl border border-black dark:border-white">
          <p className="text-xl">Error loading experiences</p>
        </div>
      ) : (
        <Experiences experiences={experiences} />
      )}
    </main>
  );
}
