import Image from "next/image";

import { carouselSections } from "@/static-data/images";
import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

import LeftArrow from "../UI/Carousel/LeftArrow";
import RightArrow from "../UI/Carousel/RightArrow";
import useFullWidthCarousel from "../UI/Carousel/useFullWidthCarousel";

const Section1 = () => {
  const { controls, prevSlide, nextSlide } =
    useFullWidthCarousel(carouselSections);

  return (
    <section className="relative w-full h-screen overflow-scroll">
      <LeftArrow onclick={prevSlide} />

      <motion.div animate={controls} className="flex h-full bg-black w-fit">
        {carouselSections.map((carousel) => {
          return (
            <div
              key={carousel.id}
              className="relative w-screen h-screen text-white"
            >
              <div className="relative w-full h-full">
                <Image
                  src={carousel.imgsrc}
                  fill
                  placeholder="blur"
                  alt="Carousel"
                />
              </div>

              <div className="absolute inset-0 pt-8 pl-5 backdrop-brightness-[30%]">
                <div className="space-y-3">
                  <p>FEELING GOOD TODAY</p>
                  <h1 className="text-9xl">{carousel.location}</h1>
                </div>

                <div className="absolute max-w-lg space-y-5 bottom-8 right-5">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Hic repellendus tempora reiciendis eos esse porro vel quam
                    commodi pariatur similique eveniet sit sequi vitae rem,
                    adipisci tenetur exercitationem fugit! Veniam.
                  </p>

                  <button className="flex items-center gap-x-2">
                    Learn more <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>

      <RightArrow onclick={nextSlide} />
    </section>
  );
};

export default Section1;
