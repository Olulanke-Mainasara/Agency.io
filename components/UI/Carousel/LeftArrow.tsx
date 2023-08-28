import { ChevronLeft } from "lucide-react";
import React from "react";

export default function LeftArrow() {
  return (
    <button
      title="Previous item"
      className="absolute left-0 z-10 flex items-center justify-center w-6 dark:text-white -translate-y-1/2 xl:h-12 h-14 top-1/2 xl:left-[4px] xs:w-4 button-swipe-prev disabled:opacity-0"
    >
      <ChevronLeft />
    </button>
  );
}
