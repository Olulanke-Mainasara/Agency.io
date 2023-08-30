"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { useEffect, useState } from "react";

export const DesktopThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        title="Toggle theme"
        className="flex items-center justify-center w-10 h-10 text-xl bg-gray-400 rounded-full animate-pulse skeleton"
      ></button>
    );
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <button
        title="Toggle theme"
        onClick={() => setTheme("light")}
        className="flex items-center justify-center w-10 h-10 text-xl text-white rounded-full"
      >
        <Sun fill="white" />
      </button>
    );
  } else {
    return (
      <button
        title="Toggle theme"
        onClick={() => setTheme("dark")}
        className="flex items-center justify-center w-10 h-10 text-xl text-black rounded-full"
      >
        <MoonStar />
      </button>
    );
  }
};

export const MobileThemeToggler = ({
  defaultClass,
  lightClass,
  darkClass,
}: {
  defaultClass: string;
  lightClass: string;
  darkClass: string;
}) => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button title="Toggle theme" className={defaultClass}></button>;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <button
        title="Toggle theme"
        onClick={() => setTheme("light")}
        className={darkClass}
      >
        <Sun fill="white" />
      </button>
    );
  } else {
    return (
      <button
        title="Toggle theme"
        onClick={() => setTheme("dark")}
        className={lightClass}
      >
        <MoonStar />
      </button>
    );
  }
};
