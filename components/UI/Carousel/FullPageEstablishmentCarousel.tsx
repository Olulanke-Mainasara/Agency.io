"use client";

import React from "react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { EstablishmentInfo } from "@/types/EstablishmentInfo";

import NBgLink from "../Links/NBgLink";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const EstablishmentCarousel = ({ items }: { items: EstablishmentInfo[] }) => {
  return (
    <section>
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

        {!items ? (
          <div className="relative grid h-[600px] place-items-center rounded-xl border border-black text-white dark:border-white md:h-[700px] lg:h-[800px] xl:h-[700px]">
            <p className="text-xl">Error loading destinations</p>
          </div>
        ) : items.length === 0 ? (
          <div className="relative grid h-[600px] place-items-center rounded-xl border border-black text-white dark:border-white md:h-[700px] lg:h-[800px] xl:h-[700px]">
            <p className="text-xl">
              No destinations are available for this country
            </p>
          </div>
        ) : (
          items.map((item) => {
            return (
              <SwiperSlide key={item._id} className="flex flex-col gap-5">
                <div className="relative h-[600px] w-full overflow-hidden rounded-xl text-white dark:border md:h-[700px] lg:h-[800px] xl:h-[700px]">
                  <div className="relative h-full w-full">
                    <Image
                      src={item.displayImage.url}
                      fill
                      sizes="(max-width: 1200px) 50vw, 33vw"
                      quality={50}
                      alt={item.displayImage.alt}
                      className="object-cover"
                    />
                  </div>

                  <div className="absolute inset-0 rounded-xl pl-3 pt-8 backdrop-brightness-50 sm:pl-5">
                    <h1 className="max-w-3xl text-3xl md:text-7xl">
                      {item.name}
                    </h1>

                    <div className="absolute bottom-8 max-w-lg space-y-5 sm:right-5">
                      <p className="md:text-lg">{item.about}</p>

                      <NBgLink
                        prompt="View the destination"
                        href={`/citys/${item.continent}/${item.country}/${item.place}/${item.slug}`}
                        extraStyles="text-white"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        )}

        <RightArrow />
      </Swiper>
    </section>
  );
};

export default EstablishmentCarousel;
