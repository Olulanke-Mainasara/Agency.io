"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { authContext } from "@/components/Providers/Providers";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { FaPlane } from "react-icons/fa";

import FBgButtons from "../Links/FBgLink";
import TBgButtons from "../Links/TBgLink";
import { FunctionalNav } from "./FunctionalNav";
import { Notifications } from "./Notifications";
import { ProfileOps } from "./Profile";
import { DesktopThemeToggler, MobileThemeToggler } from "./ThemeTogglers";

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const user = React.useContext(authContext);
  const pathname = usePathname();

  return (
    <nav
      className={`fixed top-0 left-0 z-30 h-16 lg:h-20 w-screen text-black bg-white dark:text-white dark:bg-background ${
        pathname === "/login"
          ? "hidden"
          : pathname === "/signup"
          ? "hidden"
          : pathname === "/recover"
          ? "hidden"
          : "flex"
      } justify-between items-center px-5 xl:px-8`}
    >
      {user ? (
        <span className="flex items-center lg:hidden">
          <ProfileOps />
        </span>
      ) : null}
      
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
          duration: 0.3,
        }}
        className={`w-full z-10 xl:w-fit absolute xl:static top-0 left-0 xl:h-auto xl:duration-0 bg-white dark:bg-background overflow-hidden  xl:hidden`}
      >
        <div
          className={`relative h-screen sm:gap-14 gap-10 xs:gap-8 w-full xl:h-full flex items-center px-6 xl:px-0 justify-center flex-col xl:flex-row`}
        >
          <FunctionalNav />

          <div className="absolute flex items-center justify-between w-full px-5 lg:justify-end just top-4">
            <MobileThemeToggler
              defaultClass="flex items-center justify-center w-10 aspect-square border rounded-full"
              lightClass="flex items-center justify-center w-10 aspect-square text-xl text-black border border-black bg-white rounded-full lg:hidden"
              darkClass="flex items-center justify-center w-10 aspect-square text-xl text-white border rounded-full lg:hidden"
            />

            {user ? (
              <span className="flex items-center lg:hidden">
                <Notifications size={30} />
              </span>
            ) : null}

            <button
              title="Close navigation menu"
              onClick={() => setClicked(false)}
              className="text-black dark:text-white xl:hidden"
            >
              <X size={30} />
            </button>
          </div>

          <div className="flex items-center gap-2 xs:flex-col xs:w-full xs:gap-5 xl:hidden">
            <FBgButtons />

            {!user ? (
              <Link
                href={"/login"}
                className="flex items-center justify-center gap-1 py-2 pl-3 text-black text-md dark:text-white lg:hidden"
              >
                Log in <ArrowRight size={20} />
              </Link>
            ) : null}
          </div>
        </div>
      </motion.ul>

      <div className="items-center hidden gap-6 lg:flex">
        {user ? <Notifications size={20} /> : null}

        {user ? (
          <ProfileOps />
        ) : (
          <div className="flex items-center gap-6">
            <Link
              href={"/signup"}
              className="duration-300 dark:text-white w-fit xl:flex hover:text-brandDark dark:hover:text-brandDark"
            >
              Signup
            </Link>

            <TBgButtons xPaddingAndText="px-6" yPadding="py-2" href="/login">
              Log in <ArrowRight size={20} />
            </TBgButtons>
          </div>
        )}

        <p>NGN</p>

        <DesktopThemeToggler />
      </div>

      <button
        title="Open navigation menu"
        onClick={() => setClicked(true)}
        className="text-2xl text-black xl:hidden dark:text-white xs:text-lg"
      >
        <Menu size={30} />
      </button>
    </nav>
  );
};

export default Nav;
