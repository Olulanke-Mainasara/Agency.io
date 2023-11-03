import React from "react";
import Link from "next/link";

type Features = {
  id: number;
  title: string;
  description: string;
  href: string;
};

const DefaultCard = ({ features }: { features: Features }) => {
  return (
    <Link
      href={features.href}
      prefetch={false}
      className="h-full w-full space-y-2 rounded-xl border border-black p-6 duration-300 hover:border-brandLight dark:border-white dark:hover:border-brandLight xl:p-8"
    >
      <p className="text-xl text-black dark:text-white">{features.title}</p>
      <p className="text-lg text-black opacity-70 dark:text-white">
        {features.description}
      </p>
    </Link>
  );
};

export default DefaultCard;