import React from "react";

import { Icons } from "@/components/Icons";

import { Button } from "../ShadUI/button";
import { LocationComboBox } from "./LocationComboBox";

const ExploreTheWorldForm = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [location, setLocation] = React.useState("");

  const handleExploreTheWorld = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(`${location}`);
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

        {error ? "Retry" : "Search"}
      </Button>

      {error && <div className="text-center">{errorMessage}</div>}
    </form>
  );
};

export default ExploreTheWorldForm;
