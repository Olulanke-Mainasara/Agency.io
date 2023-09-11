import Image from "next/image";
import Link from "next/link";

import BackLink from "@/components/UI/Links/BackLink";
import NBgButtons from "@/components/UI/Links/NBgLink";
import { Button } from "@/components/UI/ShadUI/button";
import Bg from "@/public/Main/Search.webp";
import React from "react";

const NotFound = () => {
  return (
    <section className="flex min-h-screen">
      <div className="relative hidden w-full lg:block lg:basis-1/2">
        <Image
          src={Bg}
          fill
          placeholder="blur"
          alt="Traveler"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center w-full lg:static lg:basis-1/2">
        <div className="flex flex-col items-center w-4/5 gap-10">
          <h1 className="md:text-9xl text-8xl dark:text-white">404</h1>

          <p className="text-2xl md:text-4xl xs:text-xl">Oops! Wrong address</p>

          <p className="md:text-xl text-center xs:text-sm md:max-w-[450px] max-w-[350px] xs:max-w-[310px]">
            The page you&apos;re looking for couldn&apos;t be found. You may
            have typed in the wrong address or the page has moved.
          </p>

          <div className="flex items-center gap-6 md:gap-10 xs:gap-4">
            <Button className="px-8 text-lg gap-1" variant={"plain"}>
              <Link href={"/"} prefetch={false}>
                Home
              </Link>
            </Button>

            <NBgButtons
              prompt="Contact us"
              href="/contactus"
              extraStyles="text-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;