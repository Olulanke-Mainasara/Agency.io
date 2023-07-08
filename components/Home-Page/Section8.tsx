/* eslint-disable @next/next/no-img-element */
import { blogs } from "@/static-data/locationsAndExperiences";
import React from "react";

import NBgButtons from "../UI/Links/NBgLink";

const Section8 = () => {
  return (
    <section className="min-h-screen p-8 mt-40 space-y-10">
      <h1 className="text-5xl">Discover your next trip</h1>

      <div className="grid grid-cols-3 gap-10">
        {blogs.map((blog) => {
          return (
            <div key={blog.id} className="h-full overflow-hidden rounded-xl">
              <img
                className="object-cover object-center w-full lg:h-48 md:h-36"
                src="https://dummyimage.com/720x400"
                alt="blog"
              />
              <div className="p-6">
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

export default Section8;
