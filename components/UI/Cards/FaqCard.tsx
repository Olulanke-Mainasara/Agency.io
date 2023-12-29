import React from "react";

const FaqCard = ({ faq }: { faq: Faq }) => {
  return (
    <div className="h-full w-full space-y-5 rounded-xl border border-black p-6 dark:border-white xl:p-8">
      <p className="text-xl text-black dark:text-white">{faq.question}</p>
      <p className="text-lg text-black opacity-70 dark:text-white">
        {faq.answer}
      </p>
    </div>
  );
};

export default FaqCard;
