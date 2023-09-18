"use client";

import { usePathname } from "next/navigation";

import { authContext } from "@/components/Providers/Providers";
import { motion } from "framer-motion";
import React from "react";

import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";

const Nav = () => {
  const user = React.useContext(authContext);
  const pathname = usePathname();

  return (
    <motion.header
      animate={
        pathname === "/" ? { display: "block", transition: { delay: 0.1 } } : {}
      }
      className={`fixed top-0 left-0 z-30 h-16 lg:h-20 w-screen text-black bg-white dark:text-white dark:bg-background ${
        pathname === "/login" ||
        pathname === "/signup" ||
        pathname === "/recover" ||
        pathname === "/" ||
        pathname === "/studio" ||
        pathname.startsWith("/studio/")
          ? "hidden"
          : ""
      } px-4 lg:px-8`}
    >
      <DesktopNav pathname={pathname} user={user} />
      <MobileNav pathname={pathname} user={user} />
    </motion.header>
  );
};

export default Nav;
