import React from "react";

const Map = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-300">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0 pt-16 xl:pt-20"
        title="map"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
      ></iframe>
    </main>
  );
};

export default Map;
