import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    <Button
      variant={"link"}
      className={`text-black dark:text-white ${extraStyles} min-w-[110px] p-0`}
    >
      <Link href={href} className="text-lg">
        {prompt}
      </Link>
      <span className="text-brandDark duration-300 group-hover:translate-x-1 dark:text-brandLight">
        <ArrowRight size={20} />
      </span>
    </Button>
  );
};

export default NBgLink;
