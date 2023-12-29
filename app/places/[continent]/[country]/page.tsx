import Image from "next/image";
import { notFound } from "next/navigation";
import { getCountry } from "@/sanity/lib/getCountry(ies)";

import { Country } from "@/types/Country";
import FaqCard from "@/components/UI/Cards/FaqCard";
import BlogCarousel from "@/components/UI/Carousel/BlogCarousel";
import FullPagePlaceCarousel from "@/components/UI/Carousel/FullPagePlaceCarousel";
import SharedPageEstablishmentCarousel from "@/components/UI/Carousel/SharedPageEstablishmentCarousel";
import BadRequest from "@/components/UI/Sections/BadRequest";

export const dynamic = "force-dynamic";

export default async function CountryPage({
  params: { country, continent },
}: {
  params: { country: string; continent: string };
}) {
  let countryInfo: Country[];

  try {
    countryInfo = await getCountry(country);
  } catch (error) {
    return <BadRequest />;
  }

  if (countryInfo.length === 0) {
    notFound();
  }

  const location = countryInfo[0];
  const {
    displayImage,
    flag,
    name,
    description,
    pictures,
    essentials,
    posts,
    destinations,
    whyWeLove,
    faqs,
  } = location;

  return (
    <main className="mx-auto max-w-[1440px] space-y-40">
      <section className="pt-20 lg:pt-24 xl:pt-0">
        <section className="flex max-h-[900px] flex-col gap-8 px-6 lg:h-screen lg:flex-row lg:items-center xl:px-8">
          <div className="hidden h-[550px] basis-1/2 grid-cols-2 gap-10 lg:grid">
            {pictures.map((picture) => (
              <div
                key={Math.floor(Math.random() * Date.now())}
                className="relative h-full w-full overflow-hidden rounded-lg"
              >
                <Image
                  src={picture.url}
                  fill
                  alt="Vacation pictures"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="space-y-8 lg:basis-1/2">
            <div className="flex items-center justify-center gap-2 xl:justify-start">
              <div className="relative h-12 w-20 md:h-14 md:w-24">
                <Image src={flag.url} fill alt={flag.alt} />
              </div>
              <h1 className="text-4xl dark:text-white md:text-7xl xl:text-8xl">
                {name}
              </h1>
            </div>

            <p className="md:text-lg">{description}</p>
          </div>

          <div className="relative h-[300px] overflow-hidden rounded-lg lg:hidden">
            <Image src={displayImage.url} fill alt={displayImage.alt} />
          </div>
        </section>

        <section className="mt-40 space-y-8 lg:mt-0">
          <p className="pl-6 text-center text-4xl dark:text-white md:text-5xl xl:pl-8">
            Essentials
          </p>

          {essentials ? (
            <div className="space-y-16">
              {essentials.map((essential, index) => {
                return (
                  <div
                    key={essential._key}
                    className="flex flex-col gap-6 xl:gap-8"
                  >
                    <div
                      className={`space-y-2 px-6 xl:px-8 ${
                        index % 2 == 1 ? "text-right" : ""
                      }`}
                    >
                      <p className="text-3xl">{essential.title}</p>
                      <p className="md:text-xl">{essential.description}</p>
                    </div>

                    <SharedPageEstablishmentCarousel
                      items={essential.locations}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <SharedPageEstablishmentCarousel items={essentials} />
          )}
        </section>
      </section>

      <section className="space-y-8">
        <p className="px-6 text-center text-4xl md:text-5xl xl:px-8">
          Popular destinations
        </p>

        <FullPagePlaceCarousel
          items={destinations}
          continent={continent}
          country={country}
        />
      </section>

      <section className="space-y-8">
        <p className="px-6 text-center text-4xl md:text-5xl xl:px-8">Posts</p>

        <BlogCarousel blog={posts} />
      </section>

      <section className="space-y-8">
        <p className="pl-6 text-center text-4xl dark:text-white md:text-5xl xl:pl-8">
          Why we love {name}
        </p>

        {whyWeLove ? (
          <div className="space-y-16">
            {whyWeLove.map((reason, index) => {
              return (
                <div key={reason._key} className="flex flex-col gap-6 xl:gap-8">
                  <p
                    className={`text-3xl ${
                      index % 2 == 1
                        ? "pr-6 text-right xl:pr-8"
                        : "pl-6 xl:pl-8"
                    }`}
                  >
                    {reason.title}
                  </p>

                  <SharedPageEstablishmentCarousel items={reason.locations} />
                </div>
              );
            })}
          </div>
        ) : (
          <SharedPageEstablishmentCarousel items={whyWeLove} />
        )}
      </section>

      <section className="space-y-8 px-6 xl:px-8">
        <p className="text-center text-4xl dark:text-white md:text-5xl">FAQs</p>

        <div className="grid grid-cols-1 gap-12 text-white md:grid-cols-2 lg:grid-cols-3">
          {faqs ? (
            faqs.map((faq) => {
              return <FaqCard key={faq._key} faq={faq} />;
            })
          ) : (
            <div className="flex h-[300px] w-full items-center justify-center gap-4 rounded-xl border">
              <p className="text-xl">No related faqs</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
