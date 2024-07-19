import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export const metadata = {
  title: "Contact us | Agency.io",
  description:
    "Discover travel tips, reviews, and deals. Plan your stay, find activities, and dine at the finest restaurants.",
};

const Contactus = () => {
  return (
    <main className="body-font relative text-gray-600 xl:h-screen">
      <div className="flex h-full w-full flex-col-reverse xl:flex-row">
        <div className="relative min-h-screen overflow-hidden bg-gray-300 xl:min-h-full xl:basis-3/5">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0 xl:pt-20"
            title="map"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          ></iframe>

          <div className="absolute bottom-10 left-1/2 flex w-4/5 -translate-x-1/2 flex-wrap rounded bg-white py-6 text-black shadow-md dark:bg-background dark:text-white">
            <div className="px-6 lg:w-1/2">
              <h2 className="text-xs font-semibold tracking-widest">ADDRESS</h2>
              <p className="mt-1 dark:text-gray-400">
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div className="mt-4 px-6 lg:mt-0 lg:w-1/2">
              <h2 className="text-xs font-semibold tracking-widest">EMAIL</h2>
              <a className="leading-relaxed text-brandDark dark:text-brandLight">
                example@email.com
              </a>
              <h2 className="mt-4 text-xs font-semibold tracking-widest">
                PHONE
              </h2>
              <p className="leading-relaxed dark:text-gray-400">123-456-7890</p>
            </div>
          </div>
        </div>

        <div className="flex min-h-screen w-full items-center justify-center py-6 xl:min-h-full xl:basis-2/5">
          <form className="w-[90%] max-w-lg text-black dark:text-white xl:w-4/5">
            <h1 className="mb-2 text-center text-6xl">
              What&apos;s <span className="text-brandDark">Up?</span>
            </h1>
            <p className="mb-2 text-center dark:text-gray-400">
              Post-ironic portland shabby chic echo park, banjo.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="text-lg leading-10">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded border border-black bg-transparent px-3 py-2 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-brandLight dark:border-gray-400"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="text-lg leading-10">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded border border-black bg-transparent px-3 py-2 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-brandLight dark:border-gray-400"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="text-lg leading-10">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="h-32 w-full resize-none rounded border border-black bg-transparent p-3 text-base leading-6 outline-none transition-colors duration-200 ease-in-out focus:border-brandLight dark:border-gray-400"
                data-gramm="false"
                wt-ignore-input="true"
              ></textarea>
            </div>
            <button className="mx-auto flex items-center gap-2 rounded border-0 bg-brandDark px-6 py-2 text-lg text-white hover:bg-opacity-80 focus:outline-none">
              Send message <FaPaperPlane />
            </button>
            <p className="mt-4 text-center text-sm dark:text-gray-400">
              We will endeavour to get back to you within 48 hours!
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contactus;
