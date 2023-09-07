import Link from "next/link";

import { User } from "firebase/auth";
import { ArrowRight, ShoppingCart } from "lucide-react";
import React from "react";

import { Button } from "../../ShadUI/button";
import Logo from "../Shared/Logo";
import { Notifications } from "../Shared/Notifications";
import { ProfileOps } from "../Shared/Profile";
import { DesktopThemeToggler } from "../Shared/ThemeTogglers";
import { DesktopNavLinks } from "./DesktopNavLinks";

const DesktopNav = ({ user }: { user: User | null | undefined }) => {
  return (
    <div className="items-center justify-between hidden h-full xl:flex">
      <Logo />

      <DesktopNavLinks />

      <div className="items-center hidden gap-6 md:flex">
        {user === undefined ? (
          <div className="w-[203px] h-12 bg-gray-400 animate-pulse"></div>
        ) : (
          <>
            {user ? (
              <>
                <Notifications size={20} />

                <ProfileOps />

                <Link href={"#"}>
                  <ShoppingCart />
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-6">
                <Link
                  href={"/signup"}
                  className="duration-300 dark:text-white w-fit xl:flex hover:text-brandDark dark:hover:text-brandDark"
                >
                  Signup
                </Link>

                <Button className="px-6 text-base gap-1" variant={"plain"}>
                  <Link href={"/login"} prefetch={false}>
                    Log in
                  </Link>
                  <span className="dark:text-brandDark text-brandLight">
                    <ArrowRight size={20} />
                  </span>
                </Button>
              </div>
            )}
          </>
        )}

        <p>NGN</p>

        <DesktopThemeToggler />
      </div>
    </div>
  );
};

export default DesktopNav;
