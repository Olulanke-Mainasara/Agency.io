import React from "react";

const FaqCard = ({ faq }: { faq: Faq }) => {
  return (
    <div className="w-full h-full p-6 border border-black space-y-5 rounded-xl dark:border-white xl:p-8">
      <p className="text-xl text-black dark:text-white">{faq.question}</p>
      <p className="text-lg text-black opacity-70 dark:text-white">
        {faq.answer}
      </p>
    </div>
  );
};

export default FaqCard;
