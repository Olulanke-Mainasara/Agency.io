import React from "react";
import Image from "next/image";

import { Blog } from "@/types/Blog";

import NBgLink from "../Links/NBgLink";

const BlogCard = ({ post }: { post: Blog }) => {
  return (
    <div
      key={post._id}
      className="h-full overflow-hidden border border-black rounded-xl dark:border-white"
    >
      <div className="relative w-full overflow-hidden h-44 xl:h-48">
        <Image
          src={post.image.url}
          fill
          sizes="(max-width: 1200px) 50vw, 33vw"
          quality={50}
          className="object-cover"
          alt={post.image.alt ? post.image.alt : ""}
        />
      </div>

      <div className="p-6">
        <h1 className="mb-3 text-lg font-bold text-black title-font dark:text-white">
          {post.title}
        </h1>

        <p className="mb-3 text-black opacity-70 dark:text-white">
          {post.description}
        </p>

        <NBgLink prompt="Read post" href={`/company/post/${post.slug}`} />
      </div>
    </div>
  );
};

export default BlogCard;
