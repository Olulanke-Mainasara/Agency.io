import React from "react";
import Image from "next/image";
import JoinUsCTAImg from "@/public/CTA/JoinUsCTAImg2.jpg";

import NBgLink from "../UI/Links/NBgLink";

const JoinUsCTA = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center">
      <Image
        src={JoinUsCTAImg}
        fill
        placeholder="blur"
        className="object-cover"
        alt="Join us today!"
      />
      <div className="absolute inset-0 flex items-center justify-center backdrop-brightness-[25%]">
        <div className="flex flex-col justify-center gap-4 text-white">
          <p className="text-center text-5xl md:text-7xl">
            We can&apos;t wait to <span className="text-brandDark">meet</span>{" "}
            you!
          </p>
          <NBgLink
            prompt="View available positions!"
            href="/company/career/#availablePositions"
            extraStyles="text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinUsCTA;
