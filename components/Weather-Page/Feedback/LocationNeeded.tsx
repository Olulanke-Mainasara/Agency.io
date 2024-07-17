import React from "react";
import Link from "next/link";

const LocationNeeded = ({ handleLocationClick }: any) => {
  return (
    <div className="absolute left-0 top-0 z-20 flex h-full w-full flex-col items-center justify-center gap-6 text-white backdrop-brightness-[10%]">
      <h1 className="w-[90%] text-center text-2xl md:text-4xl">
        We need your location 👉👈
      </h1>
      <p className="w-[95%] max-w-sm text-center">
        In order to display accurate weather information for you, our website
        would need to access your location
      </p>
      <div className="flex gap-6">
        <Link
          className="rounded-lg border bg-white px-8 py-2 text-black duration-300 hover:bg-black hover:text-white"
          href={"/utilities"}
        >
          Deny
        </Link>
        <button
          className="rounded-lg border bg-white px-8 py-2 text-black duration-300 hover:bg-black hover:text-white"
          onClick={handleLocationClick}
        >
          Allow
        </button>
      </div>
    </div>
  );
};

export default LocationNeeded;
