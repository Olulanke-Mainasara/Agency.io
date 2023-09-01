import React from "react";

const CarouselSkeleton = ({ side }: { side: string }) => {
  return (
    <section className={`flex flex-col ${side} gap-8 px-6 xl:p-8`}>
      <div className="w-1/2 h-16 bg-gray-400 animate-pulse"></div>

      <div className="flex w-full gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-xl animate-pulse bg-gray-400 h-[300px] w-full"
          ></div>
        ))}
      </div>
    </section>
  );
};

export default CarouselSkeleton;
