"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Icons } from "@/components/Icons";

import { LocationComboBox } from "../Modals/LocationComboBox";
import { Button } from "../ShadUI/button";

const ExploreTheWorldForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [location, setLocation] = React.useState("");

  const handleExploreTheWorld = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsLoading(true);
    router.push("/places");
  };

  const handleLocation = (location: string) => {
    setLocation(location);
  };

  return (
    <form
      onSubmit={handleExploreTheWorld}
      className="w-full max-w-2xl gap-6 space-y-6 md:flex md:justify-center md:space-y-0 xl:justify-start"
    >
      <LocationComboBox
        label="Places to go, things to do..."
        handleLocation={handleLocation}
      />

      <Button
        disabled={isLoading}
        className="w-full rounded-xl px-10 py-3 text-lg md:w-fit md:text-xl"
      >
        {isLoading && <Icons.spinner className="mr-2 h-5 w-5 animate-spin" />}
        Search
      </Button>
    </form>
  );
};

export default ExploreTheWorldForm;
