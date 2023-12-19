"use client";

import React from "react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { LocationInfo } from "@/types/LocationInfo";

import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const BareBonesLocationCarousel = ({ items }: { items: LocationInfo[] }) => {
  return !items ? (
    <div className="flex h-[300px] w-full items-center justify-center gap-4 rounded-xl border border-black dark:border-white">
      <p className="text-xl">Error loading locations</p>
    </div>
  ) : items.length === 0 ? (
    <div className="flex h-[300px] w-full items-center justify-center gap-4 rounded-xl border border-black dark:border-white">
      <p className="text-xl">No related locations are available</p>
    </div>
  ) : (
    <Swiper
      slidesPerView={4}
      spaceBetween={32}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: ".button-swipe-next",
        prevEl: ".button-swipe-prev",
      }}
      breakpoints={{
        // when window width is >= 0px
        0: {
          slidesPerView: 1,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
        },
        // when window width is >= 1440px
        1440: {
          slidesPerView: 4,
        },
      }}
      allowTouchMove
      modules={[Navigation, Pagination]}
      className="w-full"
    >
      <LeftArrow />

      {items.map((item) => {
        return (
          <SwiperSlide
            key={item._id}
            className="relative flex flex-col overflow-hidden border-white gap-5 rounded-xl"
          >
            <div className="h-[300px] bg-white">
              <Image
                src={item.displayImage.url}
                width={314}
                height={305}
                className="object-cover w-full h-full"
                alt={item.displayImage.alt ? item.displayImage.alt : ""}
              />
            </div>
            <div className="absolute bottom-0 w-full rounded-b-xl p-4 text-white backdrop-blur-sm backdrop-brightness-[25%]">
              <p className="text-2xl">{item.name}</p>
            </div>
          </SwiperSlide>
        );
      })}

      <RightArrow />
    </Swiper>
  );
};

const SharedPageLocationCarousel = ({
  title,
  items,
}: {
  title?: string;
  items: LocationInfo[];
}) => {
  return title ? (
    <section className="flex flex-col px-6 gap-8 xl:px-8">
      <h1 className="text-4xl md:text-5xl">{title}</h1>

      <BareBonesLocationCarousel items={items} />
    </section>
  ) : (
    <div
      className={`w-full ${!items || items.length === 0 ? "px-6 xl:px-8" : ""}`}
    >
      <BareBonesLocationCarousel items={items} />
    </div>
  );
};

export default SharedPageLocationCarousel;
