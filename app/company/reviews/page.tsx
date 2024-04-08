import React from "react";
import { staticReview } from "@/static-data/services";

import ReviewCard from "@/components/UI/Cards/ReviewCard";
import { AddReviewModal } from "@/components/UI/Modals/AddReviewModal";

const page = () => {
  return (
    <main className="mx-auto max-w-[1440px] space-y-8 px-6 pt-24 xl:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-6xl dark:text-white md:text-7xl">
          Amazing <span className="text-brandDark">Travel</span> Stories!
        </h1>
        <p className="text-2xl opacity-70">
          Not to brag, but we&apos;re kinda awesome!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 xl:grid-cols-3">
        <AddReviewModal />
        {staticReview.map((review) => (
          <ReviewCard review={review} key={review._key} />
        ))}
      </div>
    </main>
  );
};

export default page;
