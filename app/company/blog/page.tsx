import { getBlog } from "@/sanity/lib/getBlog";

import { Blog } from "@/types/Blog";
import BlogCard from "@/components/UI/Cards/BlogCard";

export default async function BlogPage() {
  let blog: Blog[];

  try {
    const queryResult = await getBlog();
    blog = queryResult;
  } catch (error) {
    blog = [];
  }

  return (
    <main className="mx-auto max-w-[1440px] space-y-8 px-6 pt-24 xl:px-8">
      <h1 className="text-center text-6xl dark:text-white md:text-7xl">
        Inspiration <span className="text-brandDark">awaits</span> here!
      </h1>

      {!blog ? (
        <div className="flex h-[300px] w-full items-center justify-center gap-4 rounded-xl border border-black dark:border-white">
          <p className="text-xl">No posts are available</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-12 text-white md:grid-cols-2 lg:grid-cols-3">
          {blog.map((post) => {
            return <BlogCard key={post._id} post={post} />;
          })}
        </div>
      )}
    </main>
  );
}
