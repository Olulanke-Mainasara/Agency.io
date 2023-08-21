import React from "react";

const LoadingLocationImageCard = () => {
  return (
    <div
      className={`relative min-h-[350px] border border-black dark:border-white rounded-xl animate-pulse bg-gray-500`}
    >
      <div className="absolute inset-0 pt-5 pl-5">
        <div className="w-1/4 h-10"></div>
      </div>
    </div>
  );
};

export default LoadingLocationImageCard;
