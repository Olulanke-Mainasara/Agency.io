"use client";

import Image, { StaticImageData } from "next/image";

import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const DefaultCarousel = ({
  items,
  extra,
}: {
  items: { id: number; img: StaticImageData; name: string; extra?: string }[];
  extra?: boolean;
}) => {
  return (
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
            key={item.id}
            className="relative flex flex-col gap-5 overflow-hidden border-white rounded-xl"
          >
            <div className="h-[300px] bg-white">
              <Image
                src={item.img}
                width={314}
                height={305}
                placeholder="blur"
                className="object-cover w-full h-full"
                alt={item.extra ? item.name + ", " + item.extra : item.name}
              />
            </div>
            <div className="absolute bottom-0 w-full p-4 text-white backdrop-brightness-[25%] backdrop-blur-sm rounded-b-xl">
              <p className="text-2xl">{item.name}</p>
              {extra && <p>{item.extra}</p>}
            </div>
          </SwiperSlide>
        );
      })}

      <RightArrow />
    </Swiper>
  );
};

export default DefaultCarousel;
