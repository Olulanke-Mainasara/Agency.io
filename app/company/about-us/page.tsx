import React from "react";

import MeetTheExecs from "@/components/About-Page/MeetTheExecs";
import Welcome from "@/components/About-Page/Welcome";
import WhatWeOffer from "@/components/About-Page/WhatWeOffer";

export const metadata = {
  title: "About us | Agency.io",
  description:
    "Discover travel tips, reviews, and deals. Plan your stay, find activities, and dine at the finest restaurants.",
};

const Aboutus = () => {
  return (
    <main className="mx-auto max-w-[1440px] px-6 pt-24 xl:px-8">
      <h1 className="mb-12 text-center text-6xl md:text-7xl xl:text-9xl">
        Agency<span className="text-brandDark">.io</span>
      </h1>
      <div className="space-y-40">
        <Welcome />
        <WhatWeOffer />
        <MeetTheExecs />
      </div>
    </main>
  );
};

export default Aboutus;
