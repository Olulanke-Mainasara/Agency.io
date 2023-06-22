import React from "react";
import { FaChevronRight } from "react-icons/fa";

export default function RightArrow({ onclick }: { onclick: Function }) {
  const handleNext = () => {
    onclick();
  };

  return (
    <button
      title="Next item"
      className="absolute right-0 z-10 flex items-center justify-center w-6 text-xl text-white -translate-y-1/2 md:w-12 xl:h-12 h-14 top-1/2 xl:right-2 xs:w-4"
      onClick={handleNext}
    >
      <FaChevronRight />
    </button>
  );
}
