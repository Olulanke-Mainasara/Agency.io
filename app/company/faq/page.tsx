import FaqCard from "@/components/UI/Cards/FaqCard";
import { getFaqs } from "@/sanity/lib/getFaqs";

export const dynamic = "force-dynamic";

export default async function Faq() {
  const faqs = await getFaqs();

  return (
    <div className="px-6 pt-24 space-y-8 xl:px-8 max-w-[1440px] mx-auto">
      <h1 className="text-4xl md:text-7xl dark:text-white">FAQs</h1>

      <div className="py-8 text-white grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {faqs.map((faq) => {
          return <FaqCard key={faq._id} faq={faq} />;
        })}
      </div>
    </div>
  );
}
