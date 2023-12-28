import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    label: "Home",
    link: `/?splashed=true`,
  },
  {
    id: 2,
    label: "Experiences",
    link: "/experiences",
  },
  {
    id: 3,
    label: "places",
    link: "/places",
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
    <nav>
      <ul className="flex flex-col items-center gap-8">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.link}
              className={`text-lg ${
                pathname == link.link
                  ? "text-brandDark dark:text-brandLight"
                  : ""
              }`}
              prefetch={false}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavLinks;
