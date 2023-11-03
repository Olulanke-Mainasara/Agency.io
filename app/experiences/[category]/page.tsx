import Image from "next/image";
import { notFound } from "next/navigation";
import { getExperience } from "@/sanity/lib/getExperience(s)";

import SharedPageLocationCarousel from "@/components/UI/Carousel/SharedPageLocationCarousel";
import NearbyLocations from "@/components/UI/Sections/NearbyLocations";

export const dynamic = "force-dynamic";

export default async function Category({
  params: { category },
}: {
  params: { category: string };
}) {
  const queryResult = await getExperience(category);

  if (!queryResult) {
    return (
      <main className="grid place-items-center">
        <p className="text-center text-2xl">
          An error occurred while fetching the data for this page, kindly check
          your internet connection and reload the page. If this error persists,
          kindly contact the support team, Thank you for visiting our website.
        </p>
      </main>
    );
  }

  if (queryResult.length === 0) {
    notFound();
  }

  const experience = queryResult[0];

  return (
    <main className="mt-16 space-y-36">
      <section className="relative min-h-[400px] xl:min-h-[50dvh]">
        <Image
          src={experience.displayImage.url}
          fill
          alt={experience.displayImage.alt ? experience.displayImage.alt : ""}
          className="object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 backdrop-brightness-[30%] md:flex-row md:gap-6 xl:p-8">
          <h1 className="text-8xl md:text-9xl">{experience.name}</h1>
          <div className="hidden h-full max-h-[200px] w-1 bg-white md:block"></div>
          <p className="w-96 text-center text-xl md:text-left md:text-2xl">
            {experience.description}
          </p>
        </div>
      </section>

      <SharedPageLocationCarousel
        title="Top 10 locations"
        items={experience.top10 ? experience.top10 : []}
      />

      <NearbyLocations title={experience.name} experience={experience.slug} />

      {experience.sections?.map((section) => (
        <SharedPageLocationCarousel
          key={section._id}
          title={section.title}
          items={section.locations}
        />
      ))}
    </main>
  );
}
