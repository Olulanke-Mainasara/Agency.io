"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { authContext } from "@/components/Providers/Providers";

import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";

const Nav = () => {
  const user = React.useContext(authContext);
  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-0 z-30 h-16 w-screen bg-white px-4 text-black dark:bg-background dark:text-white lg:h-20 lg:px-8">
      <DesktopNav pathname={pathname} user={user} />
      <MobileNav pathname={pathname} user={user} />
    </header>
  );
};

export default Nav;
