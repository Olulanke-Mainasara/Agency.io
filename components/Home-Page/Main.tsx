"use client";

import Splash from "@/components/UI/Splash/Splash";
import React, { useEffect, useState } from "react";
import { useSessionStorage } from "react-use";

import Hero from "./Hero";
import Search from "./Search";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const Main = () => {
  const [splashed, setSplashed] = useSessionStorage("splashed", "");
  const [splashCount, setSplashCount] = useState(0);

  useEffect(() => {
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
    <div className={`${splashed !== "true" ? "h-screen overflow-hidden" : ""}`}>
      {splashed !== "true" && splashCount == 0 ? <Splash /> : null}
      <Search />
      <Hero />
      <main className="w-screen">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
    </div>
  );
};

export default Main;
