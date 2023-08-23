import Image from "next/image";

import NextImg from "@/public/next.svg";
import { blogs } from "@/static-data/locationsAndExperiences";
import React from "react";

import NBgButtons from "../UI/Links/NBgLink";

const Blog = () => {
  return (
    <section className="min-h-screen p-8 py-0 space-y-10 xl:py-8">
      <h1 className="text-4xl md:text-5xl">Discover <span className="text-brandDark dark:text-brandLight">your</span> next <span className="text-brandDark dark:text-brandLight">adventure</span></h1>

      <div className="grid grid-cols-1 gap-14 xl:grid-cols-3 md:grid-cols-2">
        {blogs.map((blog) => {
          return (
            <div key={blog.id} className="h-full overflow-hidden rounded-xl">
              <Image
                width={432}
                height={192}
                className="object-cover object-center w-full lg:h-48 md:h-36"
                src={NextImg}
                alt="blog"
              />
              <div className="pt-6">
                <h1 className="mb-3 text-lg font-medium dark:text-white title-font">
                  {blog.title}
                </h1>

                <p className="mb-3 opacity-70">{blog.description}</p>

                <NBgButtons prompt="Read post" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
