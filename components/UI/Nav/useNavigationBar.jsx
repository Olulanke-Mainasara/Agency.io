/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useLocalStorage } from "react-use";

function useNavigationBar() {
  const [navMenu, setMenu] = useState("-right-full");
  const [theme, setTheme] = useLocalStorage("theme");

  function openMenu() {
    setMenu("right-0");
  }

  function closeMenu() {
    setMenu("-right-full");
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  function renderThemeToggler() {
    if (theme === "dark") {
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
    if (theme === "dark") {
      return (
        <button
          title="Toggle theme"
          onClick={() => setTheme("light")}
          className="absolute flex items-center justify-center w-10 h-10 text-xl text-black bg-white rounded-full top-7 left-6 md:hidden"
        >
          <FaSun />
        </button>
      );
    } else {
      return (
        <button
          title="Toggle theme"
          onClick={() => setTheme("dark")}
          className="absolute flex items-center justify-center w-10 h-10 text-xl text-white bg-black rounded-full top-7 left-6 md:hidden"
        >
          <FaMoon />
        </button>
      );
    }
  }

  return [
    navMenu,
    openMenu,
    closeMenu,
    renderThemeToggler,
    renderMobileThemeToggler,
  ];
}

export default useNavigationBar;
