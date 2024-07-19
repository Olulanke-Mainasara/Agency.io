"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import NBgBuildTripButton from "../Buttons/NBgBuildTripButton";
import NBgLink from "../Links/NBgLink";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

type Item = {
  id: number;
  mainText: string;
  subText: string;
  description: string;
  imgsrc: StaticImageData;
};

const FullPageCarousel = ({ items }: { items: Item[] }) => {
  return (
    <section className="xl:py-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={32}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".button-swipe-next",
          prevEl: ".button-swipe-prev",
        }}
        allowTouchMove
        modules={[Navigation, Pagination]}
        className="w-full"
      >
        <LeftArrow />

        {items.map((item) => {
          return (
            <SwiperSlide key={item.id} className="flex flex-col gap-5">
              <div className="relative h-[600px] w-full overflow-hidden rounded-xl text-white dark:border md:h-[700px] lg:h-[800px] xl:h-[700px]">
                <div className="relative h-full w-full">
                  <Image
                    src={item.imgsrc}
                    fill
                    sizes="(max-width: 1200px) 50vw, 33vw"
                    quality={50}
                    placeholder="blur"
                    alt={item.mainText}
                    className="object-cover"
                  />
                </div>

                <div className="absolute inset-0 rounded-xl pl-3 pt-8 backdrop-brightness-50 sm:pl-5">
                  <div className="space-y-3">
                    <p className="opacity-75 md:text-2xl">{item.subText}</p>
                    <p className="max-w-3xl text-3xl md:text-7xl">
                      {item.mainText}
                    </p>
                  </div>

                  <div className="absolute bottom-8 max-w-lg space-y-5 sm:right-5">
                    <p className="md:text-lg">{item.description}</p>

                    <NBgBuildTripButton />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <RightArrow />
      </Swiper>
    </section>
  );
};

export default FullPageCarousel;
