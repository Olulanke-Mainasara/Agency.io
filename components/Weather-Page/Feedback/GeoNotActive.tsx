import React from "react";
import Link from "next/link";

const GeoNotActive = () => {
  return (
    <div className="absolute left-0 top-0 z-20 flex h-full w-full flex-col items-center justify-center gap-6 text-white backdrop-brightness-[10%]">
      <h1 className="text-center text-2xl md:text-4xl">
        Geolocation is not active / supported
      </h1>
      <p className="w-[93%] max-w-lg text-center">
        Please check your settings and allow location access for this website or
        check your internet connectivity and make sure you are connected. If
        after confirming all these, it still doesn&apos;t work, then geolocation
        is NOT supported by the browser you are currently using.
      </p>
      <div className="flex gap-6 xs:flex-col">
        <Link
          href={"/utilities"}
          className="rounded-lg border bg-white px-8 py-2 text-black duration-300 hover:bg-black hover:text-white"
        >
          Utilities
        </Link>

        <button
          className="rounded-lg border bg-white px-8 py-2 text-black duration-300 hover:bg-black hover:text-white"
          onClick={() => window.location.reload()}
        >
          Reload
        </button>
      </div>
    </div>
  );
};

export default GeoNotActive;
