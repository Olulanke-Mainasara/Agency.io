import Link from "next/link";

import React, { ReactNode } from "react";

const TBgButtons = ({
  xPaddingAndText,
  yPadding,
  children,
  href,
}: {
  xPaddingAndText: string;
  yPadding: string;
  children: ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className={`${xPaddingAndText} ${yPadding} flex items-center gap-2 text-black duration-300 border rounded-full dark:bg-transparent hover:bg-black hover:text-white hover:border-black dark:text-white border-brandDark dark:border-brandLight dark:hover:bg-white dark:hover:text-black dark:hover:border-white`}
    >
      {children}
    </Link>
  );
};

export default TBgButtons;
