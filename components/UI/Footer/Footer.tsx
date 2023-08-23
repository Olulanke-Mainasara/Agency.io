"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaPlane,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { Button } from "../ShadUI/button";

const footerData = [
  {
    id: 1,
    category: "Explore",
    links: [
      { text: "Destinations", url: "/destinations" },
      { text: "Guided Tours", url: "/tours" },
      { text: "Activities", url: "/activities" },
      { text: "Travel Blog", url: "/blog" },
    ],
  },
  {
    id: 2,
    category: "Plan Your Trip",
    links: [
      { text: "Book Flights", url: "/flights" },
      { text: "Accommodations", url: "/accommodations" },
      { text: "Transportation", url: "/transport" },
      { text: "Travel Insurance", url: "/insurance" },
    ],
  },
  {
    id: 3,
    category: "Connect",
    links: [
      { text: "Contact Us", url: "/contact" },
      { text: "About Us", url: "/about" },
      { text: "FAQ", url: "/faq" },
      { text: "Privacy Policy", url: "/privacy" },
    ],
  },
];

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer
      className={`mt-40 px-8 space-y-8 ${
        pathname === "/login"
          ? "hidden"
          : pathname === "/signup"
          ? "hidden"
          : pathname === "/recover"
          ? "hidden"
          : ""
      }`}
    >
      <section className="max-w-[1440px] mx-auto">
        <p className="text-4xl md:text-6xl">
          Explore the{" "}
          <span className="text-brandDark dark:text-brandLight">World,</span>
        </p>
        <p className="text-4xl md:text-right md:text-6xl lg:text-8xl xl:text-9xl">
          One Click at a{" "}
          <span className="text-brandDark dark:text-brandLight">Time!</span>
        </p>
      </section>

      <section className="flex flex-col">
        <div className="flex flex-col items-center gap-8 pb-8 lg:flex-row">
          <Link
            href="/"
            className={`hidden lg:flex items-center text-4xl xs:text-lg h-fit`}
          >
            Agency
            <span className="text-brandDark dark:text-brandLight">.io</span>
            &nbsp;
            <FaPlane />
          </Link>

          <div className="flex flex-wrap justify-between w-full gap-8 md:justify-around lg:w-fit grow">
            {footerData.map((data) => (
              <div key={data.id} className="space-y-6">
                <p className="text-brandDark dark:text-brandLight">
                  {data.category}
                </p>
                <div className="flex flex-col gap-4">
                  {data.links.map((link, index) => (
                    <Link
                      href={link.url}
                      key={index}
                      className="transition-colors hover:text-brandDark dark:hover:text-brandLight"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Button className="hidden px-6 py-3 h-fit lg:block" variant={"outline"} asChild>
            <Link href={"/contactus"} className="text-xl">
              Contact Us
            </Link>
          </Button>
        </div>

        <section className="flex flex-col-reverse items-center justify-between gap-6 py-8 text-sm text-center border-t border-black md:flex-row dark:border-white md:gap-0">
          <p>© 2023 Agency.io Inc. All rights reserved.</p>

          <div className="flex text-2xl gap-7 dark:text-white xs:text-xl">
            <Link
              href={"#"}
              aria-label="Instagram"
              className="transition-colors hover:text-brandDark dark:hover:text-brandLight"
            >
              <FaInstagram />
            </Link>
            <Link
              href={"https://twitter.com/Grim_redd"}
              target="_blank"
              aria-label="Twitter"
              className="transition-colors hover:text-brandDark dark:hover:text-brandLight"
            >
              <FaTwitter />
            </Link>
            <Link
              href={"https://github.com/Olulanke-Mainasara/Agency.io"}
              target="_blank"
              aria-label="Github"
              className="transition-colors hover:text-brandDark dark:hover:text-brandLight"
            >
              <FaGithub />
            </Link>
            <Link
              href={"#"}
              aria-label="Instagram"
              className="transition-colors hover:text-brandDark dark:hover:text-brandLight"
            >
              <FaYoutube />
            </Link>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
