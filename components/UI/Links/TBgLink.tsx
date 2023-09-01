import Link from "next/link";

import { buttonVariants } from "@/components/UI/ShadUI/button";
import { cn } from "@/lib/utils";
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
      prefetch={false}
      className={cn(
        buttonVariants({ variant: "outline" }),
        `${xPaddingAndText} ${yPadding} rounded-full`
      )}
    >
      {children}
    </Link>
  );
};

export default TBgButtons;
