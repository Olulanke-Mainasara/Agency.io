import Experiences from "@/components/UI/Sections/Experiences";
import { getExperiences } from "@/sanity/lib/getExperience(s)";
import { staticExperiencesData } from "@/static-data/images";

export const dynamic = "force-dynamic";

export default async function Experience() {
  let experiences;

  try {
    const queryResult = await getExperiences();
    experiences = queryResult;
  } catch (err) {
    experiences = staticExperiencesData;
  }

  return (
    <div className="px-6 pt-24 space-y-8 xl:px-8 max-w-[1440px] mx-auto">
      <h1 className="text-4xl text-center md:text-7xl dark:text-white">
        Experiences
      </h1>

      <Experiences experiences={experiences} />
    </div>
  );
}
