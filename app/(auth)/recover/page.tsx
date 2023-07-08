import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { MobileThemeToggler } from "@/components/UI/Nav/ThemeTogglers";
import { buttonVariants } from "@/components/UI/ShadUI/button";
import { cn } from "@/lib/utils";
import MaleTourist from "@/public/Auth/maleTourist.webp";
import { FaPlane } from "react-icons/fa";

import { RecoverForm } from "./RecoverForm";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function Page() {
  return (
    <>
      <div className="container relative flex flex-col items-center justify-center h-screen lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "default" }),
            "absolute z-10 right-4 top-4 md:right-8 md:top-8 rounded-full"
          )}
        >
          Login
        </Link>

        <div className="relative hidden h-full text-white dark:border-r lg:block">
          <div className="absolute inset-0 z-10 flex flex-col p-10 backdrop-brightness-[60%]">
            <Link
              href={"/"}
              className="relative z-20 flex items-center text-3xl"
            >
              Agency<span className="text-brandDark">.io</span>&nbsp;
              <FaPlane />
            </Link>

            <div className="relative z-20 mt-auto">
              <blockquote className="space-y-2">
                <p className="text-lg">
                  &ldquo;This app has made planning my vacations a breeze and
                  allowed me to create unforgettable travel experiences.&rdquo;
                </p>
                <footer className="text-sm">John Smith</footer>
              </blockquote>
            </div>
          </div>

          <div className="w-full h-full bg-white">
            <Image
              src={MaleTourist}
              placeholder="blur"
              fill
              alt="Male Tourist"
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative grid w-full h-full place-items-center">
          <MobileThemeToggler
            defaultClass="absolute top-4 -left-4 md:left-0 md:top-8 lg:left-8 w-10 aspect-square border text-xl grid place-items-center rounded-full"
            lightClass="absolute top-4 -left-4 md:left-0 md:top-8 lg:left-8 w-10 aspect-square border text-xl grid place-items-center rounded-full border-black text-black"
            darkClass="absolute top-4 -left-4 md:left-0 md:top-8 lg:left-8 w-10 aspect-square border text-xl grid place-items-center rounded-full text-white"
          />

          <div className="w-full lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
              <div className="flex justify-center text-center">
                <h1 className="text-2xl tracking-tight sm:text-4xl">
                  Password Reset
                </h1>
              </div>

              <RecoverForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
