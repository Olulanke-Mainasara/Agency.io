import { blogs } from "@/static-data/images";
import React from "react";

import BlogCarousel from "../UI/Carousel/BlogCarousel";

const Blog = () => {
  return (
    <section className="flex flex-col gap-8 xl:py-8">
      <h1 className="px-6 text-4xl xl:px-8 md:text-5xl">
        Discover{" "}
        <span className="text-brandDark dark:text-brandLight">your</span> next{" "}
        <span className="text-brandDark dark:text-brandLight">adventure</span>
      </h1>

      <BlogCarousel blogs={blogs} />
    </section>
  );
};

export default Blog;
