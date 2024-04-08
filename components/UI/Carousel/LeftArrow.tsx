import React from "react";
import { ChevronLeft } from "lucide-react";

export default function LeftArrow() {
  return (
    <button
      title="Previous item"
      className="button-swipe-prev absolute left-0 top-1/2 z-10 flex h-14 w-6 -translate-y-1/2 items-center justify-center disabled:opacity-0 dark:text-white xl:left-[4px] xl:h-12 xs:w-4"
    >
      <ChevronLeft />
    </button>
  );
}
