"use client"
import Link from "next/link";

import React from "react";
import { FaBars, FaChevronRight, FaPlane } from "react-icons/fa";

import useNavigationBar from "./useNavigationBar";

const links = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Experiences",
    href: "/experiences",
  },
  {
    id: 3,
    title: "Locations",
    href: "/locations",
  },
  {
    id: 4,
    title: "Pricing",
    href: "/pricing",
  }
];

const Nav = () => {
  const [
    navMenu,
    openMenu,
    closeMenu,
    renderThemeToggler,
    renderMobileThemeToggler,
  ] = useNavigationBar();

  const handleOpenMenu = () => {
    (openMenu as Function)()
  }
  
  const handleCloseMenu = () => {
    (closeMenu as Function)()
  }

  return (
    <>
      <nav
        className={`fixed inset-0 z-30 h-16 xl:h-20 w-screen text-black bg-white dark:text-white dark:bg-[#111111] flex justify-between px-5 xl:px-6`}
      >
        <Link
            href="/"
            className={`flex items-center text-2xl xs:text-lg`}
          >
             The&nbsp;<span className="text-[#389c96] dark:text-[#6fcbc6]">Agency</span>&nbsp;<FaPlane/>
          </Link>

          <ul
            className={`flex absolute xl:static top-0 h-screen xl:h-auto w-full xl:w-auto justify-end xl:justify-center xl:px-0 duration-500 xl:bg-transparent xl:backdrop-blur-none bg-gray-800/0 backdrop-blur-lg ${navMenu}`}
          >
            <div className="relative xl:px-0 px-6 w-4/5 min-w-[240px] max-w-[320px] xl:min-w-fit xl:max-w-fit flex justify-center xl:items-center items-start sm:gap-14 xl:flex-row flex-col gap-10 xs:gap-8">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="duration-300 md:text-2xl xl:text-base hover:text-[#389c96]"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}

              <button
                title="Close navigation menu"
                onClick={handleCloseMenu}
                className="absolute text-5xl rotate-45 top-5 right-5 xl:hidden"
              >
                +
              </button>

              {(renderMobileThemeToggler as Function)()}

              <div className="flex items-center gap-2 xs:flex-col xs:w-full xs:gap-5 md:hidden">
                <Link
                  href={"/categories"}
                  className="px-5 py-3 text-lg text-white transition-colors duration-300 bg-[#389c96] sm:text-3xl rounded-3xl xs:w-full"
                >
                  Start reading
                </Link>

                <Link
                  href={"/login"}
                  className="flex items-center justify-center gap-1 py-2 pl-3 text-lg text-black dark:text-white md:text-2xl"
                >
                  Log in <FaChevronRight />
                </Link>
              </div>
            </div>
          </ul>

          <div className="items-center hidden gap-6 xl:flex">
            {(renderThemeToggler as Function)()}

            <Link
              href={"/sign-up"}
              className="dark:text-white w-fit xl:flex duration-500 hover:text-[#389c96]"
            >
              Signup
            </Link>

            |

            <Link
              href={"/login"}
              className="flex items-center justify-center w-full gap-1 px-6 py-2 dark:text-white duration-500 border border-[#389c96] dark:border-[#6fcbc6] rounded-full"
            >
              Log in <FaChevronRight />
            </Link>
          </div>

          <button
            title="Open navigation menu"
            onClick={handleOpenMenu}
            className="text-2xl text-black xl:hidden dark:text-white xs:text-lg"
          >
            <FaBars />
          </button>
      </nav>
    </>
  );
}

export default Nav;
