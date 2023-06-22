/* eslint-disable react-hooks/exhaustive-deps */
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

function useFullWidthCarousel(array: {}[]) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [width, setWidth] = useState(0);

  const controls = useAnimation();

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    const interval = setInterval(nextSlide, 6000);

    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    controls.start({
      x: -currentSlide * width,
      transition: { duration: 2 },
    });
  }, [controls, currentSlide, width]);

  function nextSlide() {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % array.length);
  }

  function prevSlide() {
    setCurrentSlide(
      (prevSlide) => (array.length + prevSlide - 1) % array.length
    );
  }

  return { controls, prevSlide, nextSlide };
}

export default useFullWidthCarousel;
