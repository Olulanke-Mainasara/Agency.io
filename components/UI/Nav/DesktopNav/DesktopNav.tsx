import Link from "next/link";

import { User } from "firebase/auth";
import { ArrowRight, ShoppingCart } from "lucide-react";
import React from "react";

import { DesktopThemeToggler } from "../../Buttons/ThemeTogglers";
import { Button } from "../../ShadUI/button";
import Logo from "../Shared/Logo";
import { Notifications } from "../Shared/Notifications";
import { ProfileOps } from "../Shared/Profile";
import { DesktopNavLinks } from "./DesktopNavLinks";

const DesktopNav = ({
  pathname,
  user,
}: {
  pathname: string;
  user: User | null | undefined;
}) => {
  return (
    <div className="items-center justify-between hidden h-full xl:flex">
      <Logo pathname={pathname} />

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
                  className="duration-300 dark:text-white w-fit xl:flex hover:text-brandDark dark:hover:text-brandLight"
                >
                  Signup
                </Link>

                <Button className="gap-1 px-6 text-base" variant={"plain"}>
                  <Link
                    href={"/login"}
                    prefetch={false}
                    className="flex items-center justify-center gap-1"
                  >
                    Log in
                    <span className="dark:text-brandDark text-brandLight">
                      <ArrowRight size={20} />
                    </span>
                  </Link>
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
