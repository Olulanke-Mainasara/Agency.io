"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Place } from "@/types/Place";

import { Button } from "../ShadUI/button";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const SharedPagePlaceCarousel = ({
  items,
  extra,
}: {
  items: Place[];
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

      {items.length === 0 ? (
        <div className="flex h-[300px] w-full items-center justify-center gap-4 rounded-xl border border-black dark:border-white">
          <p className="w-4/5 text-center text-xl">
            No related content is available yet, check back soon!
          </p>
        </div>
      ) : (
        items.map((item) => {
          return (
            <SwiperSlide
              key={item._id}
              className="relative flex flex-col gap-5 overflow-hidden rounded-xl border-white"
            >
              <div className="h-[300px] bg-white">
                <Image
                  src={item.displayImage.url}
                  width={314}
                  height={305}
                  className="h-full w-full object-cover"
                  alt={item.displayImage.alt ? item.displayImage.alt : ""}
                />
              </div>
              <div className="absolute bottom-0 flex w-full items-center justify-between rounded-b-xl p-4 text-white backdrop-blur-sm backdrop-brightness-[25%]">
                <div>
                  <p className="text-2xl">{item.name}</p>
                  {extra && <p className="xl:text-sm">{item.extra}</p>}
                </div>
                <Button className="gap-1 rounded-full" asChild>
                  <Link href={`/city/${item.slug}`}>
                    view{" "}
                    <span>
                      <ArrowRight size={20} />
                    </span>
                  </Link>
                </Button>
              </div>
            </SwiperSlide>
          );
        })
      )}

      <RightArrow />
    </Swiper>
  );
};

export default SharedPagePlaceCarousel;
