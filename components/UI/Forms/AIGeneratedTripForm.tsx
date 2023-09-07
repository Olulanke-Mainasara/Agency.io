import { Icons } from "@/components/Icons";
import { Button } from "@/components/UI/ShadUI/button";
import { Input } from "@/components/UI/ShadUI/input";
import { Label } from "@/components/UI/ShadUI/label";
import { companions, departure, months } from "@/static-data/services";
import { Calculator, Calendar, Clock } from "lucide-react";
import React from "react";
import { FaHandshake } from "react-icons/fa";

import { DatePickerWithRange } from "./DataPickerWithRange";
import { LocationComboBox } from "./LocationComboBox";
import { SelectOption } from "./Select";

export default function AIGeneratedTripForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [noOfDays, setNoOfDays] = React.useState("1");
  const [location, setLocation] = React.useState("");
  const [dateRange, setDateRange] = React.useState("");
  const [departureTime, setDepartureTime] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [companion, setCompanion] = React.useState("");

  const handleTripGenerate = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(
      `${location}, ${dateRange}, ${noOfDays}, ${departureTime}, ${month}, ${companion}`
    );
  };

  const handleLocation = React.useCallback((location: string) => {
    setLocation(location);
  }, []);

  const handleDateRange = React.useCallback((dateRange: string) => {
    setDateRange(dateRange);
  }, []);

  const handleDeparture = React.useCallback((option: string) => {
    setDepartureTime(option);
  }, []);

  const handleMonth = React.useCallback((option: string) => {
    setMonth(option);
  }, []);

  const handleCompanion = React.useCallback((option: string) => {
    setCompanion(option);
  }, []);

  return (
    <form
      onSubmit={handleTripGenerate}
      className="flex flex-col w-full max-w-2xl gap-8"
    >
      <div className="grid md:grid-cols-2 gap-x-4 gap-y-6">
        <LocationComboBox
          label="Where to?"
          width="w-[330px]"
          handleLocation={handleLocation}
        />

        <SelectOption
          label="When do you want to go?"
          items={departure}
          handleSelect={handleDeparture}
          icon={<Clock />}
        />

        {departureTime === "Specific date/range" ? (
          <DatePickerWithRange handleDateRange={handleDateRange} />
        ) : departureTime === "No specific date/range" ? (
          <>
            <div className="flex items-center w-full px-3 overflow-hidden border border-black h-14 md:h-16 dark:border-white rounded-xl">
              <Label
                htmlFor="days"
                className="flex items-center w-full gap-2 md:text-lg min-w-[230px]"
              >
                <Calculator /> No. of Days (max 7)
              </Label>
              <Input
                id="days"
                type="number"
                value={noOfDays}
                disabled={isLoading}
                min={1}
                max={7}
                onChange={(e) => setNoOfDays(e.target.value)}
                className="w-1/2 px-0 text-xl text-center bg-transparent border-none dark:text-white"
              />
            </div>

            <SelectOption
              label="Which month?"
              items={months}
              handleSelect={handleMonth}
              icon={<Calendar />}
            />
          </>
        ) : (
          ""
        )}

        <SelectOption
          label="Who are you going with?"
          items={companions}
          handleSelect={handleCompanion}
          icon={<FaHandshake size={25} />}
        />

        <Button
          disabled={isLoading}
          className="py-3 text-lg md:text-xl rounded-xl"
        >
          {isLoading && <Icons.spinner className="w-5 h-5 mr-2 animate-spin" />}

          {error ? "Retry" : "Generate"}
        </Button>
      </div>

      {error && <div className="text-center">{errorMessage}</div>}
    </form>
  );
}
