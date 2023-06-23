import React from "react";
import { FaChevronRight } from "react-icons/fa";

export default function RightArrow({ onclick }: { onclick: Function }) {
  const handleNext = () => {
    onclick();
  };

  return (
    <button
      title="Next item"
      className="absolute right-0 z-10 flex items-center justify-center w-6 text-xl dark:text-white -translate-y-1/2 xl:h-12 h-14 top-1/2 xl:right-[4px] xs:w-4"
      onClick={handleNext}
    >
      <FaChevronRight />
    </button>
  );
}
