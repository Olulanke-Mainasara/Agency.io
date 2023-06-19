import { useTheme } from "next-themes";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function useNavigationBar() {
  const [navMenu, setMenu] = useState("-right-full");
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  function openMenu() {
    setMenu("right-0");
  }

  function closeMenu() {
    setMenu("-right-full");
  }

  const renderThemeToggler = () => {
    if (!mounted) return null;

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
  };

  const renderMobileThemeToggler = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          title="Toggle theme"
          onClick={() => setTheme("light")}
          className="absolute flex items-center justify-center w-10 h-10 text-xl text-black bg-white rounded-full top-7 left-6 laptop:hidden allLM:hidden"
        >
          <FaSun />
        </button>
      );
    } else {
      return (
        <button
          title="Toggle theme"
          onClick={() => setTheme("dark")}
          className="absolute flex items-center justify-center w-10 h-10 text-xl text-white bg-black rounded-full top-7 left-6 laptop:hidden allLM:hidden"
        >
          <FaMoon />
        </button>
      );
    }
  };

  return [
    navMenu,
    openMenu,
    closeMenu,
    renderThemeToggler,
    renderMobileThemeToggler,
  ];
}

export default useNavigationBar;
