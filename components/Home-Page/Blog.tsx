import React from "react";
import { getBlog } from "@/sanity/lib/getBlog";

import { Blog } from "@/types/Blog";

import BlogCarousel from "../UI/Carousel/BlogCarousel";

const BlogSection = async () => {
  let blog: Blog[];

  try {
    const queryResult = await getBlog();
    blog = queryResult;
  } catch (error) {
    blog = [];
  }

  return (
    <section className="flex flex-col gap-8 xl:py-8">
      <h1 className="px-6 text-4xl md:text-5xl xl:px-8">
        Discover{" "}
        <span className="text-brandDark dark:text-brandLight">your</span> next{" "}
        <span className="text-brandDark dark:text-brandLight">adventure</span>
      </h1>

      <BlogCarousel blog={blog} />
    </section>
  );
};

export default BlogSection;
