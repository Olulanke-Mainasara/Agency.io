import React from "react";

const CarouselSkeleton = () => {
  return (
    <section className="flex flex-col gap-8 xl:py-8">
      <div className="w-1/2 h-16 mx-auto bg-gray-400 animate-pulse"></div>

      <div className="flex gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="rounded-xl animate-pulse bg-gray-400 h-[300px] w-full"></div>
        ))}
      </div>
    </section>
  );
};

export default CarouselSkeleton;
