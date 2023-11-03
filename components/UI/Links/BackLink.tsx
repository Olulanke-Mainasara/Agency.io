"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const BackLink = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="group flex items-center gap-2 text-lg"
    >
      <span className="text-brandDark duration-300 group-hover:-translate-x-1 dark:text-brandLight">
        <ArrowLeft size={20} />
      </span>
      back
    </button>
  );
};

export default BackLink;
