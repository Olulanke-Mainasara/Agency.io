import Link from "next/link";

import { ArrowRight } from "lucide-react";
import React from "react";

import { Button } from "../ShadUI/button";

const NBgLink = ({
  prompt,
  href,
  extraStyles,
}: {
  prompt: string;
  href: string;
  extraStyles?: string;
}) => {
  return (
    <Button variant={"link"} className={`${extraStyles} p-0 min-w-[110px]`}>
      <Link href={href}>{prompt}</Link>
      <span className="duration-300 text-brandDark dark:text-brandLight group-hover:translate-x-1">
        <ArrowRight size={20} />
      </span>
    </Button>
  );
};

export default NBgLink;
