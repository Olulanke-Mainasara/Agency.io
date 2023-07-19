import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { MobileThemeToggler } from "@/components/UI/Nav/ThemeTogglers";
import { buttonVariants } from "@/components/UI/ShadUI/button";
import { cn } from "@/lib/utils";
import FemaleTourist from "@/public/Auth/femaleTourist.webp";
import { FaPlane } from "react-icons/fa";

import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Agency.io | Login",
  description: "Authentication forms built using the components.",
};

export default function Page() {
  return (
    <>
      <div className="container relative flex flex-col items-center justify-center h-screen lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/signup"
          className={cn(
            buttonVariants({ variant: "default" }),
            "absolute z-10 right-4 top-4 md:right-8 md:top-8 rounded-full"
          )}
        >
          Sign up
        </Link>

        <div className="relative hidden h-full text-white lg:block">
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
                  &ldquo;Planning my dream vacations has never been easier
                  thanks to this amazing app. It has transformed the way I
                  travel and helped me create unforgettable memories.&rdquo;
                </p>
                <footer className="text-sm">Sarah Thompson</footer>
              </blockquote>
            </div>
          </div>

          <div className="relative w-full h-full">
            <Image
              src={FemaleTourist}
              placeholder="blur"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="Male Tourist"
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative w-full h-full grid place-items-center">
          <MobileThemeToggler
            defaultClass="absolute top-4 -left-4 md:left-0 md:top-8 lg:left-8 w-10 aspect-square border text-xl grid place-items-center rounded-full"
            lightClass="absolute top-4 -left-4 md:left-0 md:top-8 lg:left-8 w-10 aspect-square border text-xl grid place-items-center rounded-full border-black text-black"
            darkClass="absolute top-4 -left-4 md:left-0 md:top-8 lg:left-8 w-10 aspect-square border text-xl grid place-items-center rounded-full text-white"
          />

          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
              <div className="flex flex-col text-center space-y-2">
                <h1 className="text-2xl tracking-tight sm:text-4xl">
                  Welcome back!
                </h1>
                <p className="text-md text-muted-foreground">
                  Enter your details below to continue your journey
                </p>
              </div>

              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
