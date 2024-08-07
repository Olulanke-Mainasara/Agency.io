import { faqs } from "@/static-data/services";

import FaqCard from "@/components/UI/Cards/FaqCard";

export const metadata = {
  title: "FAQ | Agency.io",
  description:
    "Discover travel tips, reviews, and deals. Plan your stay, find activities, and dine at the finest restaurants.",
};

export default async function Faq() {
  return (
    <main className="mx-auto max-w-[1440px] space-y-8 px-6 pt-24 xl:px-8">
      <h1 className="text-center text-6xl dark:text-white md:text-7xl">
        Questions? <span className="text-brandDark">Answers!</span>
      </h1>

      <div className="grid grid-cols-1 gap-12 text-white md:grid-cols-2 lg:grid-cols-3">
        {faqs.map((faq) => {
          return <FaqCard key={faq._key} faq={faq} />;
        })}
      </div>
    </main>
  );
}
