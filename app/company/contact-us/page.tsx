import React from "react";

import { ContactForm } from "./ContactForm";

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
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default Contactus;
