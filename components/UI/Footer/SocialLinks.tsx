import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-7 text-2xl dark:text-white xs:text-xl">
      <Link
        href={"#"}
        aria-label="Instagram"
        prefetch={false}
        className="transition-colors hover:text-brandDark dark:hover:text-brandLight"
      >
        <FaInstagram />
      </Link>
      <Link
        href={"https://twitter.com/Grim_redd"}
        target="_blank"
        aria-label="Twitter"
        prefetch={false}
        className="transition-colors hover:text-brandDark dark:hover:text-brandLight"
      >
        <FaTwitter />
      </Link>
      <Link
        href={"https://github.com/Olulanke-Mainasara/Agency.io"}
        target="_blank"
        aria-label="Github"
        prefetch={false}
        className="transition-colors hover:text-brandDark dark:hover:text-brandLight"
      >
        <FaGithub />
      </Link>
      <Link
        href={"#"}
        aria-label="Youtube"
        prefetch={false}
        className="transition-colors hover:text-brandDark dark:hover:text-brandLight"
      >
        <FaYoutube />
      </Link>
    </div>
  );
};

export default SocialLinks;
