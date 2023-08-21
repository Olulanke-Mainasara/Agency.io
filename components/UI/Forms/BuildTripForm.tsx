import { Icons } from "@/components/Icons";
import { Button } from "@/components/UI/ShadUI/button";
import { Input } from "@/components/UI/ShadUI/input";
import { Label } from "@/components/UI/ShadUI/label";
import * as React from "react";
import { DateRange } from "react-day-picker";

import { DatePickerWithRange } from "./DataPickerWithRange";
import { LocationComboBox } from "./LocationComboBox";

export function BuildTripForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [location, setLocation] = React.useState("");
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>();
  const [noOfAdults, setNoOfAdults] = React.useState("1");
  const [noOfChildren, setNoOfChildren] = React.useState("0");
  const [noOfRooms, setNoOfRooms] = React.useState("1");

  const handleTripBuild = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(
      `${location}, ${dateRange}, ${noOfAdults}, ${noOfChildren}, ${noOfRooms}`
    );
  };

  const handleLocation = (location: string) => {
    setLocation(location);
  };

  const handleDateRange = (dateRange: DateRange | undefined) => {
    setDateRange(dateRange);
  };

  return (
    <form onSubmit={handleTripBuild} className="flex flex-col w-full gap-8">
      <div className="grid md:grid-cols-2 gap-x-4 gap-y-6">
        <LocationComboBox
          label="Search location..."
          width="w-[330px]"
          handleLocation={handleLocation}
        />

        <DatePickerWithRange handleDateRange={handleDateRange} />

        <div className="flex items-center w-full h-16 px-3 overflow-hidden border border-black rounded-xl dark:border-white">
          <Label htmlFor="adults" className="w-full text-lg">
            No. of Adults
          </Label>
          <Input
            id="adults"
            type="number"
            value={noOfAdults}
            disabled={isLoading}
            min={1}
            onChange={(e) => setNoOfAdults(e.target.value)}
            className="w-full px-0 text-xl text-center bg-transparent border-none dark:text-white"
          />
        </div>

        <div className="flex items-center w-full h-16 px-3 overflow-hidden border border-black rounded-xl dark:border-white">
          <Label htmlFor="children" className="w-full text-lg">
            No. of Children
          </Label>
          <Input
            id="children"
            type="number"
            value={noOfChildren}
            disabled={isLoading}
            min={0}
            onChange={(e) => setNoOfChildren(e.target.value)}
            className="w-full px-0 text-xl text-center bg-transparent border-none dark:text-white"
          />
        </div>

        <div className="flex items-center w-full h-16 px-3 overflow-hidden border border-black rounded-xl dark:border-white">
          <Label htmlFor="rooms" className="w-full text-lg">
            No. of Rooms
          </Label>
          <Input
            id="rooms"
            type="number"
            value={noOfRooms}
            disabled={isLoading}
            min={1}
            onChange={(e) => setNoOfRooms(e.target.value)}
            className="w-full px-0 text-xl text-center bg-transparent border-none dark:text-white"
          />
        </div>

        <Button disabled={isLoading} className="py-3 text-xl rounded-xl">
          {isLoading && <Icons.spinner className="w-5 h-5 mr-2 animate-spin" />}

          {error ? "Retry" : "Search"}
        </Button>
      </div>

      {error && <div className="text-center">{errorMessage}</div>}
    </form>
  );
}
