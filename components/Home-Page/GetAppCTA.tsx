"use client";

import Image from "next/image";
import Link from "next/link";

import MobileAndroidD from "@/public/CTA/MobileAndroidDark.png";
import MobileAndroidL from "@/public/CTA/MobileAndroidLight.png";
import MobileAppleD from "@/public/CTA/MobileAppleDark.png";
import MobileAppleL from "@/public/CTA/MobileAppleLight.png";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import React from "react";
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

  return (
    <section className="flex flex-col items-center justify-between overflow-hidden xl:h-[95dvh] xl:max-h-[800px] xl:flex-row xl:p-8">
      <div className="items-center justify-center hidden w-full h-full xl:flex basis-2/5">
        <div className="relative w-full max-w-[350px] overflow-hidden rounded-[55px] h-full">
          {mounted && (
            <Image
              src={theme === "dark" ? MobileAppleD : MobileAppleL}
              fill
              placeholder="blur"
              alt="Mobile application"
              className="scale-90"
            />
          )}
        </div>
      </div>

      <motion.div
        initial={hasViewed ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onAnimationComplete={() => setHasViewed(true)}
        className="flex flex-col items-center justify-center text-center text-black gap-6 xl:grow dark:text-white"
      >
        <h1 className="max-w-3xl text-5xl md:text-[90px] text-brandDark dark:text-brandLight text-center">
          A new adventure, on the go!
        </h1>
        <p className="max-w-2xl sm:text-lg">
          With our powerful tools, you can find the perfect vacation for your
          budget and interests, book your flights, hotels, and activities all in
          one place, and get inspired by our curated travel guides.
        </p>
        <div className="flex justify-center gap-5">
          <Button size={"sm"} className="text-lg rounded-full xl:px-8">
            <Link href={"#"} className="flex items-center w-full h-full gap-2">
              <Icons.apple className="w-4 h-4" />
              Apple
            </Link>
          </Button>

          <Button size={"sm"} className="text-lg rounded-full xl:px-8">
            <Link href={"#"} className="flex items-center w-full h-full gap-2">
              <FaAndroid />
              Android
            </Link>
          </Button>
        </div>
      </motion.div>

      <div className="flex md:w-full justify-evenly h-[750px] xl:hidden">
        <div className="relative w-[350px] md:w-full max-w-[350px] overflow-hidden rounded-[55px] h-full">
          {mounted && (
            <Image
              src={theme === "dark" ? MobileAppleD : MobileAppleL}
              fill
              placeholder="blur"
              alt="Mobile application"
              className="scale-90"
            />
          )}
        </div>

        <div className="relative w-[350px] md:w-full h-full overflow-hidden max-w-[350px]">
          {mounted && (
            <Image
              src={theme === "dark" ? MobileAndroidD : MobileAndroidL}
              fill
              placeholder="blur"
              alt="Mobile application"
              className="scale-90"
            />
          )}
        </div>
      </div>

      <div className="items-center justify-center hidden w-full h-full xl:flex basis-2/5">
        <div className="relative w-full h-full overflow-hidden max-w-[350px]">
          {mounted && (
            <Image
              src={theme === "dark" ? MobileAndroidD : MobileAndroidL}
              fill
              placeholder="blur"
              alt="Mobile application"
              className="scale-90"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default GetAppCTA;
