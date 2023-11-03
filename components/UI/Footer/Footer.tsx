"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaPlane } from "react-icons/fa";

import { Button } from "../ShadUI/button";
import SocialLinks from "./SocialLinks";

const footerData = [
  {
    id: 1,
    category: "Plan Your Trip",
    links: [
      { text: "Book Flights", url: "/flights" },
      { text: "Accommodations", url: "/accommodations" },
      { text: "Transportation", url: "/transport" },
      { text: "Travel Insurance", url: "/insurance" },
    ],
  },
  {
    id: 2,
    category: "Explore",
    links: [
      { text: "Destinations", url: "/destinations" },
      { text: "Guided Tours", url: "/tours" },
      { text: "Activities", url: "/activities" },
      { text: "Travel Blog", url: "/blog" },
    ],
  },
  {
    id: 3,
    category: "Connect",
    links: [
      { text: "About Us", url: "/aboutus" },
      { text: "FAQ", url: "/faq" },
      { text: "Privacy Policy", url: "/privacy" },
      { text: "Terms and Conditions", url: "/terms" },
    ],
  },
];

const Footer = () => {
  const [hasViewed, setHasViewed] = React.useState(false);
  const pathname = usePathname();

  return (
    <motion.footer
      animate={
        pathname === "/"
          ? { display: "block", transition: { delay: 2.8 } }
          : { display: "block" }
      }
      className={`mt-40 space-y-8 px-6 xl:px-8 ${
        pathname === "/" ? "hidden" : ""
      }`}
    >
      <section className="mx-auto max-w-[1440px] overflow-hidden">
        <motion.p
          initial={hasViewed ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          }}
          onAnimationComplete={() => setHasViewed(true)}
          className="text-center text-4xl md:text-left md:text-6xl"
        >
          Explore the{" "}
          <span className="text-brandDark dark:text-brandLight">World,</span>
        </motion.p>
        <motion.p
          initial={hasViewed ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          }}
          onAnimationComplete={() => setHasViewed(true)}
          className="text-center text-4xl md:text-right md:text-6xl lg:text-8xl xl:text-9xl"
        >
          One click at a{" "}
          <span className="text-brandDark dark:text-brandLight">Time!</span>
        </motion.p>
      </section>

      <section className="flex flex-col">
        <div className="flex flex-col items-center gap-8 pb-8 lg:flex-row">
          <Link
            href={pathname === "/" ? "/" : `/?splashed=true`}
            className={`hidden h-fit items-center text-4xl lg:flex xs:text-lg`}
          >
            Agency
            <span className="text-brandDark dark:text-brandLight">.io</span>
            &nbsp;
            <FaPlane />
          </Link>

          <div className="md: flex w-full grow flex-wrap justify-between gap-8 md:justify-around lg:w-fit">
            {footerData.map((data) => (
              <div key={data.id} className="space-y-6">
                <p className="text-brandDark dark:text-brandLight">
                  {data.category}
                </p>
                <div className="flex flex-col gap-4">
                  {data.links.map((link) => (
                    <Link
                      href={link.url}
                      prefetch={false}
                      key={link.url}
                      className="transition-colors hover:text-brandDark dark:hover:text-brandLight"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Button className="hidden lg:block" variant={"plain"} size={"sm"}>
            <Link
              href={"/contactUs"}
              prefetch={false}
              className="h-full w-full"
            >
              Contact Us
            </Link>
          </Button>
        </div>

        <section className="flex flex-col-reverse items-center justify-between gap-6 border-t border-black py-8 text-center text-sm dark:border-white md:flex-row md:gap-0">
          <p>
            © 2023 Agency
            <span className="text-brandDark dark:text-brandLight">
              .io
            </span>{" "}
            Inc. All rights reserved.
          </p>

          <SocialLinks />
        </section>
      </section>
    </motion.footer>
  );
};

export default Footer;
