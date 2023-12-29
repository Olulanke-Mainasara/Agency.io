import React from "react";
import Image from "next/image";
import Link from "next/link";
import Bg from "@/public/Main/Search.webp";

import NBgButtons from "@/components/UI/Links/NBgLink";
import { Button } from "@/components/UI/ShadUI/button";

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
      <div className="absolute inset-0 flex w-full items-center justify-center lg:static lg:basis-1/2">
        <div className="flex w-4/5 flex-col items-center gap-10">
          <h1 className="text-8xl dark:text-white md:text-9xl">404</h1>

          <p className="text-2xl md:text-4xl xs:text-xl">Oops! Wrong address</p>

          <p className="max-w-[350px] text-center md:max-w-[450px] md:text-xl xs:max-w-[310px] xs:text-sm">
            The page you&apos;re looking for couldn&apos;t be found. You may
            have typed in the wrong address or the page has moved.
          </p>

          <div className="flex items-center gap-6 md:gap-10 xs:gap-4">
            <Button className="gap-1 px-8 text-lg" variant={"plain"}>
              <Link href={`/?splashed=true`} prefetch={false}>
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
