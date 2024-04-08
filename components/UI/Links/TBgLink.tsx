import React, { ReactNode } from "react";
import Link from "next/link";

import { Button } from "@/components/UI/ShadUI/button";

const TBgLink = ({
  extraStyles,
  children,
  href,
}: {
  extraStyles?: string;
  children: ReactNode;
  href: string;
}) => {
  return (
    <Button variant={"outline"} size={"sm"} className={`${extraStyles}`}>
      <Link href={href} prefetch={false} className="flex items-center gap-2">
        {children}
      </Link>
    </Button>
  );
};

export default TBgLink;
