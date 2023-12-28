import Image from "next/image";
import { notFound } from "next/navigation";
import { getExperience } from "@/sanity/lib/getExperience(s)";

import { Experience } from "@/types/Experience";
import SharedPageEstablishmentCarousel from "@/components/UI/Carousel/SharedPageEstablishmentCarousel";
import BadRequest from "@/components/UI/Sections/BadRequest";
import NearbyLocations from "@/components/UI/Sections/NearbyLocations";

export const dynamic = "force-dynamic";

export default async function Category({
  params: { category },
}: {
  params: { category: string };
}) {
  let experienceData: Experience[];

  try {
    const queryResult = await getExperience(category);
    experienceData = queryResult;
  } catch (error) {
    return <BadRequest />;
  }

  if (experienceData.length === 0) {
    notFound();
  }

  const experience = experienceData[0];

  return (
    <main className="mt-16 space-y-36">
      <section className="relative min-h-[400px] xl:min-h-[50dvh]">
        <Image
          src={experience.displayImage.url}
          fill
          alt={experience.displayImage.alt ? experience.displayImage.alt : ""}
          className="object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-white backdrop-brightness-[30%] md:flex-row md:gap-6 xl:p-8">
          <h1 className="text-8xl md:text-9xl">{experience.name}</h1>
          <div className="hidden h-full max-h-[200px] w-1 bg-white md:block"></div>
          <p className="w-96 text-center text-xl md:text-left md:text-2xl">
            {experience.description}
          </p>
        </div>
      </section>

      <SharedPageEstablishmentCarousel
        title="Top 10 locations"
        items={experience.top10 ? experience.top10 : []}
      />

      <NearbyLocations title={experience.name} experience={experience.slug} />

      {experience.sections?.map((section) => (
        <SharedPageEstablishmentCarousel
          key={section._id}
          title={section.title}
          items={section.locations}
        />
      ))}
    </main>
  );
}
