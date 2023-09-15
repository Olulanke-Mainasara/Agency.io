"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import Splash from "@/components/UI/Splash/Splash";
import React from "react";

const Body = ({ children }: { children: React.ReactNode }) => {
  const [splashCounter, setSplashCounter] = React.useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();
  const splashed = searchParams.get("splashed");

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
      setSplashCounter((prev) => prev + 1);
    }, 2800);

    return () => {
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <main
      className={`max-w-[1440px] mx-auto ${
        !splashed && splashCounter === 0 ? "h-screen overflow-hidden" : ""
      }`}
    >
      {!splashed && splashCounter === 0 ? <Splash /> : null}

      {children}
    </main>
  );
};

export default Body;
