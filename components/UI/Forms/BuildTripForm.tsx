import { Icons } from "@/components/Icons";
import { Button } from "@/components/UI/ShadUI/button";
import { Input } from "@/components/UI/ShadUI/input";
import { Label } from "@/components/UI/ShadUI/label";
import { Home, User } from "lucide-react";
import * as React from "react";
import { DateRange } from "react-day-picker";
import { FaChild } from "react-icons/fa";

import { DatePickerWithRange } from "./DataPickerWithRange";
import { LocationComboBox } from "./LocationComboBox";

export default function BuildTripForm() {
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
    <form
      onSubmit={handleTripBuild}
      className="flex flex-col w-full max-w-2xl gap-8"
    >
      <div className="grid md:grid-cols-2 gap-x-4 gap-y-6">
        <LocationComboBox
          label="Search location..."
          width="w-[330px]"
          handleLocation={handleLocation}
        />

        <DatePickerWithRange handleDateRange={handleDateRange} />

        <div className="flex gap-2 md:col-span-2">
          <div className="flex items-center w-full px-3 overflow-hidden border border-black h-14 md:h-16 rounded-xl dark:border-white">
            <Label
              htmlFor="adults"
              className="flex items-center w-full gap-2 md:text-lg"
            >
              <User /> <span className="hidden md:block">No. of</span> Adults
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

          <div className="flex items-center w-full px-3 overflow-hidden border border-black h-14 md:h-16 rounded-xl dark:border-white">
            <Label
              htmlFor="children"
              className="flex items-center w-full md:min-w-[170px] gap-2 md:text-lg"
            >
              <span className="text-lg">
                <FaChild />
              </span>
              <span className="hidden md:block">No. of</span> Children
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
        </div>

        <div className="flex items-center w-full px-3 overflow-hidden border border-black h-14 md:h-16 rounded-xl dark:border-white">
          <Label
            htmlFor="rooms"
            className="flex items-center w-full gap-2 md:text-lg"
          >
            <Home /> No. of Rooms
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

        <Button
          disabled={isLoading}
          className="py-3 text-lg md:text-xl rounded-xl"
        >
          {isLoading && <Icons.spinner className="w-5 h-5 mr-2 animate-spin" />}

          {error ? "Retry" : "Search"}
        </Button>
      </div>

      {error && <div className="text-center">{errorMessage}</div>}
    </form>
  );
}
