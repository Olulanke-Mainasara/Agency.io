import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialLinks = () => {
  return (
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
        aria-label="Youtube"
        className="transition-colors hover:text-brandDark dark:hover:text-brandLight"
      >
        <FaYoutube />
      </Link>
    </div>
  );
};

export default SocialLinks;
