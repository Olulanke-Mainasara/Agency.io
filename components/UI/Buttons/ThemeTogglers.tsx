"use client";

import React, { useEffect } from "react";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const DesktopThemeToggler = () => {
  const [mounted, setMounted] = React.useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        title="Toggle theme"
        className="skeleton flex h-10 w-10 animate-pulse items-center justify-center rounded-full bg-gray-400 text-xl"
      ></button>
    );
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <button
        title="Toggle theme"
        onClick={() => setTheme("light")}
        className="flex h-10 w-10 items-center justify-center rounded-full text-xl text-white"
      >
        <Sun fill="white" />
      </button>
    );
  } else {
    return (
      <button
        title="Toggle theme"
        onClick={() => setTheme("dark")}
        className="flex h-10 w-10 items-center justify-center rounded-full text-xl text-black"
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
  const [mounted, setMounted] = React.useState(false);
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
