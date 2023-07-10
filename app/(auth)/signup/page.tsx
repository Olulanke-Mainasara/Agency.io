import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { MobileThemeToggler } from "@/components/UI/Nav/ThemeTogglers";
import { buttonVariants } from "@/components/UI/ShadUI/button";
import { cn } from "@/lib/utils";
import MaleTourist2 from "@/public/Auth/maleTourist2.webp";
import { FaPlane } from "react-icons/fa";

import { SignupForm } from "./SignupForm";

export const metadata: Metadata = {
  title: "Agency.io | Sign up",
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
                  &ldquo;I can&apos;t imagine planning my trips without this
                  incredible app. It has revolutionized the way I explore new
                  destinations and helped me discover hidden gems around the
                  world.&rdquo;
                </p>
                <footer className="text-sm">Alexandra Rodriguez</footer>
              </blockquote>
            </div>
          </div>

          <div className="relative w-full h-full">
            <Image
              src={MaleTourist2}
              placeholder="blur"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl tracking-tight sm:text-4xl">
                  Start Your Adventure
                </h1>
                <p className="text-md text-muted-foreground">
                  Enter your details below to embark on an unforgettable journey
                </p>
              </div>

              <SignupForm />

              <p className="px-8 text-sm text-center text-muted-foreground">
                By clicking Sign up, you agree to our{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
