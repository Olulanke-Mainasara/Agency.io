"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const BackLink = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center text-lg group gap-2"
    >
      <span className="text-brandDark duration-300 group-hover:-translate-x-1 dark:text-brandLight">
        <ArrowLeft size={20} />
      </span>
      back
    </button>
  );
};

export default BackLink;
