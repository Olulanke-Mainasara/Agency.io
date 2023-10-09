import Image from "next/image";

import { Blog } from "@/types/Blog";
import React from "react";

import NBgLink from "../Links/NBgLink";

const BlogCard = ({ post }: { post: Blog }) => {
  return (
    <div key={post._id} className="h-full overflow-hidden rounded-xl">
      <div className="relative w-full overflow-hidden h-44 xl:h-48">
        <Image
          src={post.image.url}
          fill
          sizes="(max-width: 1200px) 50vw, 33vw"
          quality={50}
          className="object-cover"
          alt={post.image.alt}
        />
      </div>

      <div className="pt-6">
        <h1 className="mb-3 text-lg font-bold dark:text-white title-font">
          {post.title}
        </h1>

        <p className="mb-3 opacity-70">{post.description}</p>

        <NBgLink prompt="Read post" href={`/company/post/${post.slug}`} />
      </div>
    </div>
  );
};

export default BlogCard;
