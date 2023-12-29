import { faqs } from "@/static-data/services";

import FaqCard from "@/components/UI/Cards/FaqCard";

export default async function Faq() {
  return (
    <main className="mx-auto max-w-[1440px] space-y-8 px-6 pt-24 xl:px-8">
      <h1 className="text-center text-4xl dark:text-white md:text-7xl">FAQs</h1>

      <div className="grid grid-cols-1 gap-12 text-white md:grid-cols-2 lg:grid-cols-3">
        {faqs.map((faq) => {
          return <FaqCard key={faq._key} faq={faq} />;
        })}
      </div>
    </main>
  );
}
