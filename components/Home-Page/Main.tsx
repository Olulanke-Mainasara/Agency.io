"use client";

import Splash from "@/components/UI/Splash/Splash";
import { auth } from "@/firebase/client.config";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useSessionStorage } from "react-use";

import Hero from "./Hero";
import Search from "./Search";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";

const Main = () => {
  const [splashed, setSplashed] = useSessionStorage("splashed", "");
  const [splashCount, setSplashCount] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState<string | null>(null);

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

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);

        user.providerData.forEach((profile) =>
          setDisplayName(profile.displayName)
        );
      } else {
        setLoggedIn(false);
        setDisplayName(null);
      }
    });
  }, []);

  return (
    <div className={`${splashed !== "true" ? "h-screen overflow-hidden" : ""}`}>
      {splashed !== "true" && splashCount == 0 ? <Splash /> : null}

      <main className="w-screen max-w-[1440px] mx-auto">
        <Search loggedIn={loggedIn} displayName={displayName} />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Hero />
        <Section8 />
      </main>
    </div>
  );
};

export default Main;
