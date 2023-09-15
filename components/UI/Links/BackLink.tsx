"use client";

import { useRouter } from "next/navigation";

import { ArrowLeft } from "lucide-react";
import React from "react";

const BackLink = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 text-lg group"
    >
      <span className="duration-300 text-brandDark dark:text-brandLight group-hover:-translate-x-1">
        <ArrowLeft size={20} />
      </span>
      back
    </button>
  );
};

export default BackLink;
