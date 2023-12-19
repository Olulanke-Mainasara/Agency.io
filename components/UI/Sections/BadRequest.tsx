import React from "react";
import Link from "next/link";

import NBgLink from "../Links/NBgLink";
import { Button } from "../ShadUI/button";

const BadRequest = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-10 md:h-[70dvh] md:justify-end lg:h-[50dvh] xl:h-[70dvh]">
      <h1 className="text-8xl dark:text-white md:text-9xl">400</h1>

      <p className="text-2xl md:text-4xl xs:text-xl">Yikes! Bad request</p>

      <p className="max-w-[350px] text-center md:max-w-[450px] md:text-xl xs:max-w-[310px] xs:text-sm">
        An error occurred while fetching the data for this page, kindly check
        your internet connection and reload the page. If this error persists,
        kindly contact the support team, Thank you for visiting our website.
      </p>

      <div className="flex items-center gap-6 md:gap-10 xs:gap-4">
        <Button className="px-8 text-lg gap-1" variant={"plain"}>
          <Link href={`/?splashed=true`} prefetch={false}>
            Home
          </Link>
        </Button>

        <NBgLink prompt="Contact us" href="/contactus" extraStyles="text-lg" />
      </div>
    </main>
  );
};

export default BadRequest;
