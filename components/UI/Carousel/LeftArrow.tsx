import React from "react";
import { FaChevronLeft } from "react-icons/fa";

export default function LeftArrow({ onclick }: { onclick: Function }) {
  const handlePrev = () => {
    onclick();
  };

  return (
    <button
      title="Previous item"
      className="absolute left-0 z-10 flex items-center justify-center w-6 text-xl text-white -translate-y-1/2 md:w-12 xl:h-12 h-14 top-1/2 xl:left-2 xs:w-4"
      onClick={handlePrev}
    >
      <FaChevronLeft />
    </button>
  );
}
