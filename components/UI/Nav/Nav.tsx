"use client";

import { usePathname } from "next/navigation";

import { authContext } from "@/components/Providers/Providers";
import React from "react";

import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";

const Nav = () => {
  const user = React.useContext(authContext);
  const pathname = usePathname();

  return (
    <header
      className={`fixed top-0 left-0 z-30 h-16 lg:h-20 w-screen text-black bg-white dark:text-white dark:bg-background ${
        pathname === "/login"
          ? "hidden"
          : pathname === "/signup"
          ? "hidden"
          : pathname === "/recover"
          ? "hidden"
          : "block"
      } px-4 lg:px-8`}
    >
      <DesktopNav pathname={pathname} user={user} />
      <MobileNav pathname={pathname} user={user} />
    </header>
  );
};

export default Nav;
