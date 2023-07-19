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
    <form onSubmit={handleExploreTheWorld} className="grid gap-6">
      <LocationComboBox
        label="Places to go, things to do..."
        width="w-[675px]"
        handleLocation={handleLocation}
      />

      <Button
        disabled={isLoading}
        className="w-1/2 py-3 text-xl md:h-16 rounded-xl"
      >
        {isLoading && <Icons.spinner className="w-5 h-5 mr-2 animate-spin" />}

        {error ? "Retry" : "Explore"}
      </Button>

      {error && <div className="text-center">{errorMessage}</div>}
    </form>
  );
};

export default ExploreTheWorldForm;
