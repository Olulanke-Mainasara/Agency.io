"use client";

import Splash from "@/components/UI/Splash/Splash";
import React from "react";
import { useSessionStorage } from "react-use";

const Body = ({ children }: { children: React.ReactNode }) => {
  const [splashed, setSplashed] = useSessionStorage("splashed", "");
  const [splashCount, setSplashCount] = React.useState(0);

  React.useEffect(() => {
    if (splashed !== "") return; // Skip if already set

    const timeout = setTimeout(() => {
      setSplashed("true");
      setSplashCount((prev) => prev + 1);
    }, 2900);
    window.addEventListener("beforeunload", () => setSplashed(""));

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("beforeunload", () => setSplashed(""));
    };
  }, [splashed, setSplashed]);

  return (
    <main
      className={`max-w-[1440px] mx-auto ${
        splashed !== "true" ? "h-screen overflow-hidden" : ""
      }`}
    >
      {splashed !== "true" && splashCount == 0 ? <Splash /> : null}

      {children}
    </main>
  );
};

export default Body;
