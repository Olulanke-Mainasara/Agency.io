import React from "react";

import AvailablePositions from "@/components/Career-Page/AvailablePositions";
import Hero from "@/components/Career-Page/Hero";
import HiringAndEnquiries from "@/components/Career-Page/HiringAndEnquiries";
import JoinUsCTA from "@/components/Career-Page/JoinUsCTA";
import WhyJoinUs from "@/components/Career-Page/WhyJoinUs";

export const metadata = {
  title: "Career | Agency.io",
  description:
    "Discover travel tips, reviews, and deals. Plan your stay, find activities, and dine at the finest restaurants.",
};

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
