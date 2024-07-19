import Image from "next/image";
import { notFound } from "next/navigation";
import { getService } from "@/sanity/lib/getService(s)";

import { Service } from "@/types/Service";
import SharedPageEstablishmentCarousel from "@/components/UI/Carousel/SharedPageEstablishmentCarousel";
import BadRequest from "@/components/UI/Sections/BadRequest";
import NearbyLocations from "@/components/UI/Sections/NearbyLocations";

export const dynamic = "force-dynamic";

export default async function Category({
  params: { service },
}: {
  params: { service: string };
}) {
  let serviceData: Service[];

  try {
    serviceData = await getService(service);
  } catch (error) {
    return <BadRequest />;
  }

  if (serviceData.length === 0) {
    notFound();
  }

  const serviceInfo = serviceData[0];

  return (
    <main className="mt-16 space-y-36">
      <section className="relative min-h-[400px] xl:min-h-[50dvh]">
        <Image
          src={serviceInfo.displayImage.url}
          fill
          alt={serviceInfo.displayImage.alt ? serviceInfo.displayImage.alt : ""}
          className="object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-white backdrop-brightness-[30%] md:flex-row md:gap-6 xl:p-8">
          <h1 className="text-6xl md:text-9xl">{serviceInfo.name}</h1>
          <div className="hidden h-full max-h-[200px] w-1 bg-white md:block"></div>
          <p className="w-96 text-center text-xl md:text-left md:text-3xl">
            {serviceInfo.description}
          </p>
        </div>
      </section>

      <SharedPageEstablishmentCarousel
        title="Top 10 locations"
        items={serviceInfo.top10 ? serviceInfo.top10 : []}
      />

      <NearbyLocations title={serviceInfo.name} experience={serviceInfo.slug} />

      {serviceInfo.sections?.map((section) => (
        <SharedPageEstablishmentCarousel
          key={section._id}
          title={section.title}
          items={section.locations}
        />
      ))}
    </main>
  );
}
