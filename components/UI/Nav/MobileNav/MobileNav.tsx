import React from "react";
import { User } from "firebase/auth";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import BuildTripButton from "../../Buttons/BuildTripButton";
import { MobileThemeToggler } from "../../Buttons/ThemeTogglers";
import NBgLink from "../../Links/NBgLink";
import Logo from "../Shared/Logo";
import { Notifications } from "../Shared/Notifications";
import { ProfileOps } from "../Shared/Profile";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = ({
  pathname,
  user,
}: {
  pathname: string;
  user: User | null | undefined;
}) => {
  const [clicked, setClicked] = React.useState(false);

  React.useEffect(() => {
    setClicked(false);
  }, [pathname]);

  return (
    <div className="flex h-full items-center justify-between xl:hidden">
      {user ? (
        <span className="z-20 flex items-center xl:hidden">
          <ProfileOps />
        </span>
      ) : null}

      <Logo pathname={pathname} />

      {user ? (
        <span className="z-20 grid place-items-center xl:hidden">
          <Notifications size={24} />
        </span>
      ) : null}

      {clicked ? (
        <button
          title="Close navigation menu"
          onClick={() => setClicked(false)}
          className="z-20 text-black dark:text-white"
        >
          <X size={26} />
        </button>
      ) : (
        <button
          title="Open navigation menu"
          onClick={() => setClicked(true)}
          className="z-20 text-black dark:text-white"
        >
          <Menu size={26} />
        </button>
      )}

      <motion.div
        initial={{ height: 0 }}
        animate={clicked ? { height: "100dvh" } : { height: 0 }}
        transition={{
          duration: 0.3,
        }}
        className={`absolute inset-0 overflow-hidden bg-white dark:bg-background`}
      >
        <div className="relative flex min-h-[100dvh] flex-col items-center justify-center gap-8">
          <MobileNavLinks />

          <div className="flex items-center gap-2 xs:w-full xs:flex-col xs:gap-5">
            <BuildTripButton />

            {!user ? (
              <NBgLink prompt="Log in" href={`/login?previous=${pathname}`} />
            ) : null}
          </div>

          <MobileThemeToggler
            defaultClass="flex items-center justify-center w-10 aspect-square bg-gray-400 rounded-full absolute xs:bottom-3 bottom-12 minHeight animate-pulse skeleton"
            lightClass="flex items-center justify-center w-10 aspect-square text-xl text-black border absolute xs:bottom-3 bottom-12 minHeight border-black bg-white rounded-full"
            darkClass="flex items-center justify-center w-10 aspect-square text-xl text-white border absolute xs:bottom-3 bottom-12 minHeight rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default MobileNav;
