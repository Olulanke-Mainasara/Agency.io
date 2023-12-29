import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FemaleTourist from "@/public/Auth/femaleTourist.webp";
import { FaPlane } from "react-icons/fa";

import { MobileThemeToggler } from "@/components/UI/Buttons/ThemeTogglers";
import BackLink from "@/components/UI/Links/BackLink";
import { Button } from "@/components/UI/ShadUI/button";

import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Agency.io | Login",
  description: "Welcome back! Enter your details to continue your journey.",
};

export const runtime = "edge";

export default function Page({ searchParams }: { searchParams: any }) {
  const previous = searchParams.previous;

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full text-white lg:block">
          <div className="absolute inset-0 z-10 flex flex-col p-10 backdrop-brightness-[60%]">
            <Link
              href={`/?splashed=true`}
              className="relative z-20 flex items-center text-3xl"
            >
              Agency<span className="text-brandLight">.io</span>&nbsp;
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

          <div className="relative h-full w-full">
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

        <div className="relative grid h-full w-full place-items-center px-6">
          <div className="absolute top-4 flex w-full items-center justify-between px-4 md:top-8 lg:px-8">
            <BackLink />

            <MobileThemeToggler
              defaultClass="w-10 aspect-square text-xl grid place-items-center bg-gray-400 rounded-full animate-pulse skeleton"
              lightClass="w-10 aspect-square border text-xl grid place-items-center rounded-full border-black text-black"
              darkClass="w-10 aspect-square border text-xl grid place-items-center rounded-full text-white"
            />

            <Button className="rounded-full">
              <Link href={`/signup${previous ? `?previous=${previous}` : ""}`}>
                Sign up
              </Link>
            </Button>
          </div>

          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl tracking-tight sm:text-4xl">
                  Welcome back!
                </h1>
                <p className="text-md text-muted-foreground">
                  Enter your details below to continue your journey
                </p>
              </div>

              <LoginForm previous={previous} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
