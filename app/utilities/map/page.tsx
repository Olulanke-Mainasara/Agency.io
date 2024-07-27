"use client";

import React from "react";

import { useLocation } from "@/hooks/useLocation";

const Map = () => {
  const { loading, locationData } = useLocation();
  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-300">
      {loading ? (
        <div className="absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center text-white backdrop-brightness-[10%]">
          <h1 className="text-center text-2xl md:text-3xl xs:flex-col">
            Getting location information...
          </h1>
        </div>
      ) : (
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0 pt-16 xl:pt-20"
          title="map"
          src={`https://maps.google.com/maps?width=100%&height=600&hl=en&q=${locationData?.latitude},${locationData?.longitude}&ie=UTF8&t=&z=14&iwloc=B&output=embed`}
        ></iframe>
      )}
    </main>
  );
};

export default Map;
