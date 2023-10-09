import React from "react";

const FaqCard = ({ faq }: { faq: Faq }) => {
  return (
    <div>
      <p>{faq.question}</p>
      <p>{faq.answer}</p>
    </div>
  );
};

export default FaqCard;
