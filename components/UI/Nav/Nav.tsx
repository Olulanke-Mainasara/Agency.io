import Image from "next/image";
import Link from "next/link";

import Profile from "@/public/Hero/profile.webp";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  FaArrowRight,
  FaBars,
  FaChevronRight,
  FaPlane,
  FaTimes,
} from "react-icons/fa";

import FBgButtons from "../Buttons/FBgButtons";
import TBgButtons from "../Buttons/TBgButtons";
import { FunctionalNav } from "./FunctionalNav";
import { Notifications } from "./Notifications";
import { ProfileOps } from "./Profile";
import useNavigationBar from "./useNavigationBar";

const Nav = () => {
  const [clicked, setClicked] = useState(false);

  // Simulating a loggedIn state
  const [loggedIn, setLoggedIn] = useState(true);

  const [renderThemeToggler, renderMobileThemeToggler] = useNavigationBar();

  return (
    <nav
      className={`fixed top-0 left-0 z-30 h-16 lg:h-20 w-screen text-black bg-white dark:text-white dark:bg-[#111111] flex justify-between items-center px-5 xl:px-8`}
    >
      <Link href="/" className={`flex items-center text-2xl xs:text-lg`}>
        Agency
        <span className="text-brandDark dark:text-brandLight">.io</span>
        &nbsp;
        <FaPlane />
      </Link>

      <span className="hidden xl:block">
        <FunctionalNav />
      </span>

      <motion.ul
        initial={{ height: 0 }}
        animate={clicked ? { height: "100dvh" } : { height: 0 }}
        transition={{
          duration: 0.5,
        }}
        className={`w-full z-10 xl:w-fit absolute xl:static top-0 left-0 xl:h-auto xl:duration-0 bg-white dark:bg-[#111111] overflow-hidden  xl:hidden`}
      >
        <div
          className={`relative h-screen sm:gap-14 gap-10 xs:gap-8 w-full xl:h-full flex items-center px-6 xl:px-0 justify-center flex-col xl:flex-row`}
        >
          <FunctionalNav />

          <div className="absolute flex items-center justify-between w-full px-6 lg:justify-end just top-8">
            {(renderMobileThemeToggler as Function)()}

            {loggedIn ? <span className="lg:hidden"><Notifications size={30} /></span> : null}

            <button
              title="Close navigation menu"
              onClick={() => setClicked(false)}
              className="text-4xl text-black dark:text-white xl:hidden"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex items-center gap-2 xs:flex-col xs:w-full xs:gap-5 xl:hidden">
            <FBgButtons />

            {!loggedIn ? (
              <Link
                href={"/login"}
                className="flex items-center justify-center gap-1 py-2 pl-3 text-black text-md dark:text-white lg:hidden"
              >
                Log in <FaChevronRight />
              </Link>
            ) : null}
          </div>
        </div>
      </motion.ul>

      <div className="items-center hidden gap-6 lg:flex">
        {loggedIn ? <Notifications size={20} /> : null}

        {loggedIn ? (
          <ProfileOps />
        ) : (
          <div className="flex items-center gap-6">
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
        )}

        <p>NGN</p>

        {(renderThemeToggler as Function)()}
      </div>

      {loggedIn ? (
        <span className="lg:hidden">
          <ProfileOps />
        </span>
      ) : null}

      <button
        title="Open navigation menu"
        onClick={() => setClicked(true)}
        className="text-2xl text-black xl:hidden dark:text-white xs:text-lg"
      >
        <FaBars />
      </button>
    </nav>
  );
};

export default Nav;
