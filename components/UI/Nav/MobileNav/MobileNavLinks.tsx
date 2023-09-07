import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const links = [
  {
    id: 1,
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    label: "Experiences",
    link: "/experiences",
  },
  {
    id: 3,
    label: "Locations",
    link: "/locations",
  },
  {
    id: 4,
    label: "Utilities",
    link: "/utilities",
  },
  {
    id: 5,
    label: "Company",
    link: "/company",
  },
];

const MobileNavLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col items-center gap-8">
      {links.map((link) => (
        <li key={link.id}>
          <Link
            href={link.link}
            className={`${
              pathname == link.link ? "text-brandDark dark:text-brandLight" : ""
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileNavLinks;
