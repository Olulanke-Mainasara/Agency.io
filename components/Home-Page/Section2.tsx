import Image from "next/image";

import { carouselSections } from "@/static-data/images";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import LeftArrow from "../UI/Carousel/LeftArrow";
import RightArrow from "../UI/Carousel/RightArrow";

const Section2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [next, setNext] = useState(true);

  const variants = {
    hidden: {
      x: next ? 200 : -200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  function nextSlide() {
    setNext(true);

    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselSections.length);
  }

  function prevSlide() {
    setNext(false);

    setCurrentSlide(
      (prevSlide) =>
        (carouselSections.length + prevSlide - 1) % carouselSections.length
    );
  }

  return (
    <section className="relative w-full h-screen p-8 overflow-scroll">
      {currentSlide > 0 ? <LeftArrow onclick={prevSlide} /> : null}

      <AnimatePresence>
        <motion.div
          key={carouselSections[currentSlide].id}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="relative w-full h-full overflow-hidden text-white rounded-xl"
        >
          <div className="relative w-full h-full">
            <Image
              src={carouselSections[currentSlide].imgsrc}
              fill
              placeholder="blur"
              alt="Carousel"
            />
          </div>

          <div className="absolute inset-0 pt-8 pl-5 backdrop-brightness-50">
            <div className="space-y-3">
              <p className="text-2xl opacity-75">
                {carouselSections[currentSlide].subText}
              </p>
              <h1 className="max-w-3xl text-7xl">
                {carouselSections[currentSlide].mainText}
              </h1>
            </div>

            <div className="absolute max-w-lg space-y-5 bottom-8 right-5">
              <p className="text-lg">
                {carouselSections[currentSlide].description}
              </p>

              <button className="flex items-center gap-x-2">
                Build your trip <FaArrowRight />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {currentSlide < carouselSections.length - 1 ? (
        <RightArrow onclick={nextSlide} />
      ) : null}
    </section>
  );
};

export default Section2;
