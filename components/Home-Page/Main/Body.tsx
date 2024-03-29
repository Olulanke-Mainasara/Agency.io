"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Splash from "@/components/UI/Splash/Splash";

const Body = ({ children }: { children: React.ReactNode }) => {
  const [splashCounter, setSplashCounter] = React.useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();
  const splashed = searchParams.get("splashed");

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/", { scroll: false });
      setSplashCounter((prev) => prev + 1);
    }, 2800);

    return () => clearTimeout(timeout);
  }, [router]);

  const shouldDisplaySplash = !splashed && splashCounter === 0;

  return (
    <main
      className={`mx-auto max-w-[1440px] ${
        shouldDisplaySplash ? "h-screen overflow-hidden" : ""
      }`}
    >
      {shouldDisplaySplash && <Splash />}
      {children}
    </main>
  );
};

export default Body;
