import React from "react";
import Link from "next/link";

const ErrorOccurred = () => {
  return (
    <div className="absolute left-0 top-0 z-20 flex h-full w-full flex-col items-center justify-center gap-6 text-white backdrop-brightness-[10%]">
      <h1 className="text-center text-2xl md:text-3xl">An error occurred</h1>
      <p className="w-[93%] max-w-lg text-center">
        A server error occurred, try reloading the browser and check to make
        sure that you are connected to a functioning internet connection. If the
        error persists, please contact my developers for more info and a
        possible resolution of the error.
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

export default ErrorOccurred;
