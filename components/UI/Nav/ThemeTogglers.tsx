"use client";

import { useTheme } from "next-themes";
import React from "react";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

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
        className="flex items-center justify-center w-10 h-10 text-xl border rounded-full"
      ></button>
    );
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <button
        title="Toggle theme"
        onClick={() => setTheme("light")}
        className="flex items-center justify-center w-10 h-10 text-xl text-white border rounded-full"
      >
        <FaSun />
      </button>
    );
  } else {
    return (
      <button
        title="Toggle theme"
        onClick={() => setTheme("dark")}
        className="flex items-center justify-center w-10 h-10 text-xl text-black border border-black rounded-full"
      >
        <FaMoon />
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
        <FaSun />
      </button>
    );
  } else {
    return (
      <button
        title="Toggle theme"
        onClick={() => setTheme("dark")}
        className={lightClass}
      >
        <FaMoon />
      </button>
    );
  }
};
