import React from "react";

import AvailablePositions from "@/components/Career-Page/AvailablePositions";
import Hero from "@/components/Career-Page/Hero";
import HiringAndEnquiries from "@/components/Career-Page/HiringAndEnquiries";
import JoinUsCTA from "@/components/Career-Page/JoinUsCTA";
import WhyJoinUs from "@/components/Career-Page/WhyJoinUs";

const Career = () => {
  return (
    <main className="space-y-40">
      <Hero />
      <WhyJoinUs />
      <AvailablePositions />
      <HiringAndEnquiries />
      <JoinUsCTA />
    </main>
  );
};

export default Career;
