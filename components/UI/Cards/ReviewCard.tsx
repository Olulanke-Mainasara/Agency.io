import React, { useMemo } from "react";
import { Star } from "lucide-react";
import { FaStar } from "react-icons/fa";

import { Review } from "@/types/EstablishmentInfo";

const ReviewCard = ({ review }: { review: Review }) => {
  const ratingStars = useMemo(() => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= review.rating ? (
          <FaStar key={i} className="text-brandDark" size={20} />
        ) : (
          <Star key={i} className="text-brandDark" size={21} />
        )
      );
    }
    return stars;
  }, [review.rating]);

  return (
    <div className="space-y-2 rounded-xl border border-black p-6 dark:border-gray-400">
      <div className="flex gap-1">{ratingStars}</div>
      <p className="text-2xl">{review.title}</p>
      <p className="opacity-70">By {review.name}</p>
      <p>{review.description}</p>
    </div>
  );
};

export default ReviewCard;
