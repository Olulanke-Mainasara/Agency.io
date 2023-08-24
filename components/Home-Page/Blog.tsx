import Image from "next/image";

import { blogs } from "@/static-data/images";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import LeftArrow from "../UI/Carousel/LeftArrow";
import RightArrow from "../UI/Carousel/RightArrow";
import NBgButtons from "../UI/Links/NBgLink";

const Blog = () => {
  return (
    <section className="flex flex-col gap-8 xl:py-8">
      <h1 className="px-6 text-4xl xl:px-8 md:text-5xl">
        Discover{" "}
        <span className="text-brandDark dark:text-brandLight">your</span> next{" "}
        <span className="text-brandDark dark:text-brandLight">adventure</span>
      </h1>

      <Swiper
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
          1440: {
            slidesPerView: 3,
            spaceBetween: 56,
          },
        }}
        allowTouchMove
        modules={[Navigation, Pagination]}
        className="w-full"
      >
        <LeftArrow />

        {blogs.map((blog) => {
          return (
            <SwiperSlide
              key={blog.id}
              className="h-full overflow-hidden rounded-xl"
            >
              <div className="relative w-full overflow-hidden h-44 xl:h-48">
                <Image
                  src={blog.img}
                  fill
                  sizes="(max-width: 1200px) 50vw, 33vw"
                  quality={50}
                  className="object-cover"
                  alt={blog.title}
                />
              </div>

              <div className="pt-6">
                <h1 className="mb-3 text-lg font-bold dark:text-white title-font">
                  {blog.title}
                </h1>

                <p className="mb-3 opacity-70">{blog.description}</p>

                <NBgButtons prompt="Read post" />
              </div>
            </SwiperSlide>
          );
        })}

        <RightArrow />
      </Swiper>
    </section>
  );
};

export default Blog;
