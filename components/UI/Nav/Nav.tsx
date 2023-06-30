import Link from "next/link";

import React from "react";
import {
  FaArrowRight,
  FaBars,
  FaChevronRight,
  FaPlane,
  FaTimes,
} from "react-icons/fa";

import FBgButtons from "../Buttons/FBgButtons";
import TBgButtons from "../Buttons/TBgButtons";
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
  },
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
    (openMenu as Function)();
  };

  const handleCloseMenu = () => {
    (closeMenu as Function)();
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-30 h-16 lg:h-20 w-screen text-black bg-white dark:text-white dark:bg-[#111111] flex justify-between px-5 xl:px-6`}
      >
        <Link href="/" className={`flex items-center text-2xl xs:text-lg`}>
          Agency
          <span className="text-brandDark dark:text-brandLight">.io</span>
          &nbsp;
          <FaPlane />
        </Link>

        <ul
          className={`w-full xl:w-fit absolute xl:static top-0 left-0 xl:h-auto duration-500 xl:duration-0 bg-white dark:bg-[#111111] overflow-hidden ${navMenu}`}
        >
          <div
            className={`relative h-screen sm:gap-14 gap-10 xs:gap-8 w-full xl:h-full flex items-center px-6 xl:px-0 justify-center flex-col xl:flex-row`}
          >
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="duration-300 md:text-2xl dark:text-white xl:text-base hover:text-brandDark dark:hover:text-brandLight"
                >
                  {link.title}
                </Link>
              </li>
            ))}

            <div className="absolute flex justify-between w-full px-6 lg:justify-end just top-8">
              {(renderMobileThemeToggler as Function)()}

              <button
                title="Close navigation menu"
                onClick={handleCloseMenu}
                className="text-4xl text-black dark:text-white xl:hidden"
              >
                <FaTimes />
              </button>
            </div>

            <div className="flex items-center gap-2 xs:flex-col xs:w-full xs:gap-5 xl:hidden">
              <FBgButtons />

              <Link
                href={"/login"}
                className="flex items-center justify-center gap-1 py-2 pl-3 text-lg text-black dark:text-white md:text-2xl lg:hidden"
              >
                Log in <FaChevronRight />
              </Link>
            </div>
          </div>
        </ul>

        <div className="items-center hidden gap-6 lg:flex">
          {(renderThemeToggler as Function)()}
          <Link
            href={"/sign-up"}
            className="duration-300 dark:text-white w-fit xl:flex hover:text-brandDark dark:hover:text-brandDark"
          >
            Signup
          </Link>
          |
          <TBgButtons xPaddingAndText="px-6" yPadding="py-2" href="/login">
            Log in <FaArrowRight />
          </TBgButtons>
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
};

export default Nav;
