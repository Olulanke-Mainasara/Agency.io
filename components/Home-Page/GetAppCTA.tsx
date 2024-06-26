"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import MobileAndroidD from "@/public/CTA/MobileAndroidDark.png";
import MobileAndroidL from "@/public/CTA/MobileAndroidLight.png";
import MobileAppleD from "@/public/CTA/MobileAppleDark.png";
import MobileAppleL from "@/public/CTA/MobileAppleLight.png";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { FaAndroid } from "react-icons/fa";

import { Icons } from "../Icons";
import { Button } from "../UI/ShadUI/button";

const GetAppCTA = () => {
  const [hasViewed, setHasViewed] = React.useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const renderMobileImage = (src: StaticImageData) => {
    return (
      <div className="relative h-full w-[350px] overflow-hidden rounded-[35px]">
        {mounted && (
          <Image
            src={src}
            fill
            placeholder="blur"
            alt="Mobile application"
            className="scale-90"
          />
        )}
      </div>
    );
  };

  return (
    <section className="flex flex-col items-center justify-between overflow-hidden xl:h-[95dvh] xl:max-h-[800px] xl:flex-row xl:p-8">
      <div className="hidden h-full w-full basis-2/5 items-center justify-center xl:flex">
        {renderMobileImage(theme === "dark" ? MobileAppleD : MobileAppleL)}
      </div>

      <motion.div
        initial={hasViewed ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onAnimationComplete={() => setHasViewed(true)}
        className="flex flex-col items-center justify-center gap-6 text-center text-black dark:text-white xl:grow"
      >
        <p className="max-w-3xl px-5 text-center text-5xl text-brandDark dark:text-brandLight md:text-[90px] xl:px-0">
          A new adventure, on the go!
        </p>
        <p className="max-w-lg px-6 sm:text-lg">
          With our powerful tools, you can find the perfect vacation for your
          budget and interests, book your flights, hotels, and activities all in
          one place, and get inspired by our curated travel guides.
        </p>
        <div className="flex justify-center gap-5">
          <Button size={"sm"} className="rounded-full text-lg xl:px-8" asChild>
            <Link href={"#"} className="flex h-full w-full items-center gap-2">
              <Icons.apple className="h-4 w-4" />
              Apple
            </Link>
          </Button>

          <Button size={"sm"} className="rounded-full text-lg xl:px-8" asChild>
            <Link href={"#"} className="flex h-full w-full items-center gap-2">
              <FaAndroid />
              Android
            </Link>
          </Button>
        </div>
      </motion.div>

      <div className="mt-10 flex h-[750px] justify-evenly gap-10 md:w-full xl:hidden">
        {renderMobileImage(theme === "dark" ? MobileAppleD : MobileAppleL)}

        {renderMobileImage(theme === "dark" ? MobileAndroidD : MobileAndroidL)}
      </div>

      <div className="hidden h-full w-full basis-2/5 items-center justify-center xl:flex">
        {renderMobileImage(theme === "dark" ? MobileAndroidD : MobileAndroidL)}
      </div>
    </section>
  );
};

export default GetAppCTA;
