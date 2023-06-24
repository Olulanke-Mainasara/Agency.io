import { carouselSections } from "@/static-data/images";
import { motion } from "framer-motion";
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

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.7,
          },
        }}
        className="h-full"
      >
        <motion.div
          key={carouselSections[currentSlide].id}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="relative w-full h-full overflow-hidden text-white border rounded-xl"
        >
          <div
            className={`relative w-full h-full ${
              currentSlide == 0
                ? "bg-[url('/Carousel/Carousel1.jpg')]"
                : currentSlide == 1
                ? "bg-[url('/Carousel/Carousel2.jpg')]"
                : currentSlide == 2
                ? "bg-[url('/Carousel/Carousel3.jpg')]"
                : currentSlide == 3
                ? "bg-[url('/Carousel/Carousel4.jpg')]"
                : currentSlide == 4
                ? "bg-[url('/Carousel/Carousel5.jpg')]"
                : ""
            }  bg-center bg-cover`}
          ></div>

          <div className="absolute inset-0 pt-8 pl-3 sm:pl-5 backdrop-brightness-50">
            <div className="space-y-3">
              <p className="opacity-75 md:text-2xl">
                {carouselSections[currentSlide].subText}
              </p>
              <h1 className="max-w-3xl text-3xl md:text-7xl">
                {carouselSections[currentSlide].mainText}
              </h1>
            </div>

            <div className="absolute max-w-lg space-y-5 bottom-8 sm:right-5">
              <p className="md:text-lg">
                {carouselSections[currentSlide].description}
              </p>

              <button className="flex items-center gap-x-2">
                Build your trip
                <span className="text-brandLight">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {currentSlide < carouselSections.length - 1 ? (
        <RightArrow onclick={nextSlide} />
      ) : null}
    </section>
  );
};

export default Section2;
