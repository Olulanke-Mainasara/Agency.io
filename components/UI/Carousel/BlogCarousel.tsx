"use client";

import React from "react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Blog } from "@/types/Blog";

import NBgLink from "../Links/NBgLink";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const BlogCarousel = ({ blog }: { blog: Blog[] }) => {
  return (
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

      {!blog ? (
        <div className="flex h-[300px] w-full items-center justify-center gap-4 rounded-xl border border-black dark:border-white">
          <p className="text-xl">Error loading posts</p>
        </div>
      ) : blog.length === 0 ? (
        <div className="flex h-[300px] w-full items-center justify-center gap-4 rounded-xl border border-black dark:border-white">
          <p className="text-xl">No posts available</p>
        </div>
      ) : (
        blog.map((blog) => {
          return (
            <SwiperSlide
              key={blog._id}
              className="h-full overflow-hidden rounded-xl"
            >
              <div className="relative h-44 w-full overflow-hidden xl:h-48">
                <Image
                  src={blog.image.url}
                  fill
                  sizes="(max-width: 1200px) 50vw, 33vw"
                  quality={50}
                  className="object-cover"
                  alt={blog.image.alt ? blog.image.alt : ""}
                />
              </div>

              <div className="pt-6">
                <h1 className="title-font mb-3 text-lg font-bold dark:text-white">
                  {blog.title}
                </h1>

                <p className="mb-3 opacity-70">{blog.description}</p>

                <NBgLink
                  prompt="Read post"
                  href={`/company/blog/${blog.slug}`}
                />
              </div>
            </SwiperSlide>
          );
        })
      )}

      <RightArrow />
    </Swiper>
  );
};

export default BlogCarousel;
