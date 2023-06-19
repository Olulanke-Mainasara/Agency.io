"use client"
import Link from "next/link";

import React from "react";
import { FaBars, FaChevronRight } from "react-icons/fa";

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
        className={`fixed inset-0 z-30 h-16 w-screen text-black bg-white flex justify-between xl:px-6`}
      >
        <Link
            href="/"
            className={`flex items-center text-2xl xs:text-lg`}
          >
            <span>The Agency</span>
          </Link>

          <ul
            className={`flex absolute xl:static top-0 h-screen xl:h-auto w-full xl:w-auto justify-end xl:justify-center xl:px-0 duration-500 xl:bg-transparent xl:backdrop-blur-none bg-gray-800/0 backdrop-blur-lg ${navMenu}`}
          >
            <div className="relative px-6 w-4/5 min-w-[240px] max-w-[320px] xl:min-w-full xl:max-w-full flex justify-center xl:items-center items-start sm:gap-14 xl:flex-row flex-col gap-10 xs:gap-8">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="duration-500 md:text-2xl xl:text-base hover:opacity-50"
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
                  className="px-5 py-3 text-lg text-white transition-colors duration-300 bg-black sm:text-3xl rounded-3xl xs:w-full"
                >
                  Start reading
                </Link>

                <Link
                  href={"/login"}
                  className="flex items-center justify-center gap-1 py-2 pl-3 text-lg text-black md:text-2xl"
                >
                  Log in <FaChevronRight />
                </Link>
              </div>
            </div>
          </ul>

          <div className="flex items-center gap-6 allEMT:hidden">
            {(renderThemeToggler as Function)()}

            <Link
              href={"/login"}
              className="flex items-center justify-center w-full gap-1 px-6 py-2 text-white duration-500 bg-black border border-black rounded-full dark:text-black dark:bg-white dark:hover:text-white dark:hover:bg-black"
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
