import BlogCard from "@/components/UI/Cards/BlogCard";
import { getBlog } from "@/sanity/lib/getBlog";
import { staticBlogData } from "@/static-data/images";

export const dynamic = "force-dynamic";

export default async function Blog() {
  let blog;

  try {
    const queryResult = await getBlog();
    blog = queryResult;
  } catch (error) {
    blog = staticBlogData;
  }

  return (
    <div className="px-6 pt-24 space-y-8 xl:px-8 max-w-[1440px] mx-auto">
      <h1 className="text-4xl md:text-7xl dark:text-white">Blog</h1>

      <div className="text-white grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blog.map((post) => {
          return <BlogCard key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
}
