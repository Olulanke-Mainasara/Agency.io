import Link from "next/link";

import { ArrowRight } from "lucide-react";
import React from "react";

const NBgButtons = ({ prompt }: { prompt: string }) => {
  return (
    <Link href={"#"} className="flex items-center gap-x-2 group">
      {prompt}
      <span className="duration-300 text-brandLight group-hover:translate-x-1">
        <ArrowRight size={20} />
      </span>
    </Link>
  );
};

export default NBgButtons;
