import { Icons } from "@/components/Icons";
import * as React from "react";

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
      className="w-full max-w-2xl gap-6 space-y-6 md:space-y-0 md:flex md:justify-center xl:justify-start"
    >
      <LocationComboBox
        label="Places to go, things to do..."
        width="w-[338px]"
        handleLocation={handleLocation}
      />

      <Button
        disabled={isLoading}
        className="w-full px-10 py-3 text-lg md:text-xl rounded-xl md:w-fit"
      >
        {isLoading && <Icons.spinner className="w-5 h-5 mr-2 animate-spin" />}

        {error ? "Retry" : "Explore"}
      </Button>

      {error && <div className="text-center">{errorMessage}</div>}
    </form>
  );
};

export default ExploreTheWorldForm;
