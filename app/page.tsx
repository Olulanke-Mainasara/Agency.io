"use client";

import Hero from "@/components/Home-Page/Hero";
import Section1 from "@/components/Home-Page/Section1";
import Section2 from "@/components/Home-Page/Section2";
import Section3 from "@/components/Home-Page/Section3";
import Splash from "@/components/UI/Splash/Splash";
import { useEffect, useState } from "react";
import { useLocalStorage, useSessionStorage } from "react-use";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useLocalStorage("theme");
  const [splashed, setSplashed] = useSessionStorage("splashed");

  useEffect(() => {
    if (!theme) {
      const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

      if (matchMedia.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }

    setMounted(true);

    const timeOut = setTimeout(() => setSplashed("true"), 2900);
    window.addEventListener("beforeunload", () => setSplashed(""));

    return () => {
      clearTimeout(timeOut);
      window.removeEventListener("beforeunload", () => setSplashed(""));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return null;

  return (
    <div className={`${splashed !== "true" ? "h-screen overflow-hidden" : ""}`}>
      {splashed !== "true" ? <Splash /> : null}
      <Hero />
      <main className="w-screen">
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
    </div>
  );
}
