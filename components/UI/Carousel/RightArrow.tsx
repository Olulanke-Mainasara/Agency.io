import React from "react";
import { ChevronRight } from "lucide-react";

export default function RightArrow() {
  return (
    <button
      title="Next item"
      className="button-swipe-next absolute right-0 top-1/2 z-10 flex h-14 w-6 -translate-y-1/2 items-center justify-center disabled:opacity-0 dark:text-white xl:right-[4px] xl:h-12 xs:w-4"
    >
      <ChevronRight />
    </button>
  );
}
