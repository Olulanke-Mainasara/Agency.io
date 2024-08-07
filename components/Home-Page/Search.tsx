"use client";

import React from "react";
import Image from "next/image";
import SearchImg from "@/public/Main/Search.webp";
import { services } from "@/static-data/services";

import { authContext } from "../Providers/Providers";
import TBgBuildTripButton from "../UI/Buttons/TBgBuildTripButton";
import TBgExploreButton from "../UI/Buttons/TBgExploreButton";
import TBgGenerateTripButton from "../UI/Buttons/TBgGenerateTripButton";
import NBgLink from "../UI/Links/NBgLink";
import TBgLink from "../UI/Links/TBgLink";
import { Button } from "../UI/ShadUI/button";

const Search = () => {
  const user = React.useContext(authContext);

  return (
    <section
      id="explore"
      className="flex w-full p-4 pb-0 lg:max-h-[900px] lg:gap-8 lg:p-8 lg:pb-0 xl:h-screen"
    >
      <div className="hidden items-center justify-end xl:flex xl:basis-1/2 ">
        <div className="relative h-4/5 w-full overflow-hidden rounded-xl">
          <Image
            src={SearchImg}
            placeholder="blur"
            fill
            quality={90}
            alt="Plane taking off"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-8 pt-16 md:pt-28 xl:basis-1/2 xl:items-start xl:justify-center xl:pt-0 xsmax:items-center">
        <div className="flex max-w-3xl gap-5 overflow-scroll dark:text-white xl:flex-wrap xl:justify-start xsmax:flex-wrap xsmax:justify-center">
          {services.map((service) => {
            return (
              <React.Fragment key={service.id}>
                <TBgLink extraStyles="py-2" href={service.href}>
                  {service.title}
                </TBgLink>
              </React.Fragment>
            );
          })}

          <NBgLink prompt="View more" href="/services" />
        </div>

        {user === undefined ? (
          <div className="h-12 w-80 animate-pulse bg-gray-400 md:w-[600px]"></div>
        ) : user ? (
          <h1 className="text-[26px] dark:text-white md:text-5xl xl:text-left xsmax:text-center">
            What&apos;s the{" "}
            <span className="text-brandDark dark:text-brandLight">plan</span>
            {user.displayName ? ", " + user.displayName.split(" ")[0] : ""}?
          </h1>
        ) : (
          <h1 className="text-2xl dark:text-white md:text-5xl xl:text-left xsmax:text-center">
            Discover your{" "}
            <span className="text-brandDark dark:text-brandLight">next</span>{" "}
            adventure
          </h1>
        )}

        <div className="flex gap-4 overflow-scroll xsmax:justify-center">
          <TBgExploreButton />
          <TBgBuildTripButton />
          <TBgGenerateTripButton />
        </div>
      </div>
    </section>
  );
};

export default Search;
