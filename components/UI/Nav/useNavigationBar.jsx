/* eslint-disable react-hooks/exhaustive-deps */
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function useNavigationBar() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  function renderThemeToggler() {
    if (!mounted) {
      return (
        <button
          title="Toggle theme"
          className="flex items-center justify-center w-10 h-10 text-xl bg-black border border-white rounded-full"
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
          <FaSun />
        </button>
      );
    } else {
      return (
        <button
          title="Toggle theme"
          onClick={() => setTheme("dark")}
          className="flex items-center justify-center w-10 h-10 text-xl text-black rounded-full"
        >
          <FaMoon />
        </button>
      );
    }
  }

  function renderMobileThemeToggler() {
    if (!mounted) {
      return (
        <button
          title="Toggle theme"
          className="flex items-center justify-center w-10 h-10 text-xl bg-black border border-white rounded-full"
        ></button>
      );
    }

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          title="Toggle theme"
          onClick={() => setTheme("light")}
          className="flex items-center justify-center w-10 h-10 text-xl text-black bg-white rounded-full lg:hidden"
        >
          <FaSun />
        </button>
      );
    } else {
      return (
        <button
          title="Toggle theme"
          onClick={() => setTheme("dark")}
          className="flex items-center justify-center w-10 h-10 text-xl text-black border border-black rounded-full lg:hidden"
        >
          <FaMoon />
        </button>
      );
    }
  }

  return [renderThemeToggler, renderMobileThemeToggler];
}

export default useNavigationBar;
