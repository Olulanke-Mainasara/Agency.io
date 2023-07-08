import React from "react";
import { FaArrowRight } from "react-icons/fa";

const NBgButtons = ({ prompt }: { prompt: string }) => {
  return (
    <button className="flex items-center gap-x-2 group">
      {prompt}
      <span className="duration-300 text-brandLight group-hover:translate-x-1">
        <FaArrowRight />
      </span>
    </button>
  );
};

export default NBgButtons;
