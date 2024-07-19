import React from "react";
import Image from "next/image";
import JoinUsCTAImg1 from "@/public/CTA/JoinUsCTAImg1.jpg";

import NBgLink from "../UI/Links/NBgLink";

const Hero = () => {
  return (
    <section className="relative h-screen xl:flex">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-6 backdrop-brightness-[25%] xl:relative xl:basis-2/5 xl:items-start xl:px-8 xl:backdrop-brightness-100">
        <h1 className="text-8xl">
          Join <span className="text-brandDark">Us!</span>
        </h1>
        <p className="max-w-xl text-center md:text-xl xl:text-left">
          Are you ready to embark on an exciting journey with us? We are looking
          for passionate individuals who are eager to make a difference. Join
          our team and be part of a collaborative and vibrant environment where
          innovation thrives.
        </p>
        <NBgLink prompt="Who are we?" href="/company/about-us" />
      </div>
      <div className="relative h-full xl:basis-3/5">
        <Image
          src={JoinUsCTAImg1}
          fill
          placeholder="blur"
          className="object-cover"
          alt="Join us today!"
        />
      </div>
    </section>
  );
};

export default Hero;
