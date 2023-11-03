import { getBlog } from "@/sanity/lib/getBlog";
import { staticBlogData } from "@/static-data/images";

import BlogCard from "@/components/UI/Cards/BlogCard";

export default async function Blog() {
  let blog;

  try {
    const queryResult = await getBlog();
    blog = queryResult;
  } catch (error) {
    blog = staticBlogData;
  }

  return (
    <main className="mx-auto max-w-[1440px] space-y-8 px-6 pt-24 xl:px-8">
      <h1 className="text-4xl dark:text-white md:text-7xl">Blog</h1>

      <div className="grid grid-cols-1 gap-12 text-white md:grid-cols-2 lg:grid-cols-3">
        {blog.map((post) => {
          return <BlogCard key={post._id} post={post} />;
        })}
      </div>
    </main>
  );
}
