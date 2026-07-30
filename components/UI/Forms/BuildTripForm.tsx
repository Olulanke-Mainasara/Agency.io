"use client";

import React from "react";
import Link from "next/link";
import { parse } from "date-fns";
import { Home, User } from "lucide-react";
import { FaChild } from "react-icons/fa";

import { Icons } from "@/components/Icons";
import { authContext } from "@/components/Providers/Providers";
import { Button } from "@/components/UI/ShadUI/button";
import { Input } from "@/components/UI/ShadUI/input";
import { Label } from "@/components/UI/ShadUI/label";
import { useToast } from "@/components/UI/ShadUI/toast/use-toast";

import { DatePickerWithRange } from "../Modals/DataPickerWithRange";
import { LocationComboBox } from "../Modals/LocationComboBox";

function parseDateRange(range: string): { from: Date | null; to: Date | null } {
  const [fromText, toText] = range.split(" - ").map((part) => part.trim());
  const from = fromText ? parse(fromText, "LLL dd, y", new Date()) : null;
  const to = toText ? parse(toText, "LLL dd, y", new Date()) : null;

  return {
    from: from && !isNaN(from.getTime()) ? from : null,
    to: to && !isNaN(to.getTime()) ? to : null,
  };
}

export default function BuildTripForm() {
  const user = React.useContext(authContext);
  const { toast } = useToast();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [tripName, setTripName] = React.useState<string>("");
  const [location, setLocation] = React.useState("");
  const [dateRange, setDateRange] = React.useState("");
  const [noOfAdults, setNoOfAdults] = React.useState("1");
  const [noOfChildren, setNoOfChildren] = React.useState("0");
  const [noOfRooms, setNoOfRooms] = React.useState("1");

  const handleTripBuild = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!user) {
      return;
    }

    setIsLoading(true);

    try {
      const { from, to } = parseDateRange(dateRange);

      const response = await fetch("/api/itineraries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firebaseUid: user.uid,
          tripName,
          destination: location,
          dateFrom: from,
          dateTo: to,
          adults: Number(noOfAdults),
          children: Number(noOfChildren),
          rooms: Number(noOfRooms),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to build trip");
      }

      toast({
        title: "Trip saved.",
        description: `${tripName || "Your trip"} has been added to your profile.`,
      });
      setTripName("");
      setLocation("");
      setDateRange("");
      setNoOfAdults("1");
      setNoOfChildren("0");
      setNoOfRooms("1");
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem saving your trip.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLocation = (location: string) => {
    setLocation(location);
  };

  const handleDateRange = (dateRange: string) => {
    setDateRange(dateRange);
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center gap-4 py-6 text-center">
        <p className="opacity-70">Sign in to build and save a trip.</p>
        <Button asChild>
          <Link href="/login?previous=/">Sign in</Link>
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleTripBuild}
      className="flex w-full max-w-2xl flex-col gap-8"
    >
      <div className="grid gap-x-4 gap-y-6 md:grid-cols-2">
        <Input
          type="text"
          value={tripName}
          disabled={isLoading}
          required
          placeholder="Trip name e.g Summer vacation in Paris"
          onChange={(e) => setTripName(e.target.value)}
          className="h-14 w-full rounded-xl border border-black bg-transparent px-3 text-xl placeholder:text-base placeholder:text-gray-400 dark:border-gray-400 dark:text-white md:col-span-2"
        />

        <LocationComboBox
          label="Search location..."
          handleLocation={handleLocation}
        />

        <DatePickerWithRange handleDateRange={handleDateRange} />

        <div className="flex gap-4 md:col-span-2">
          <div className="flex h-14 w-full items-center overflow-hidden rounded-xl border border-black px-3 dark:border-gray-400 md:h-16">
            <Label
              htmlFor="adults"
              className="flex w-full items-center gap-2 md:min-w-[170px] md:text-lg"
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
              className="w-full border-none bg-transparent px-0 text-center text-xl dark:text-white"
            />
          </div>

          <div className="flex h-14 w-full items-center overflow-hidden rounded-xl border border-black px-3 dark:border-gray-400 md:h-16">
            <Label
              htmlFor="children"
              className="flex w-full items-center gap-2 md:min-w-[170px] md:text-lg"
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
              className="w-full border-none bg-transparent px-0 text-center text-xl dark:text-white"
            />
          </div>
        </div>

        <div className="flex h-14 w-full items-center overflow-hidden rounded-xl border border-black px-3 dark:border-gray-400 md:h-16">
          <Label
            htmlFor="rooms"
            className="flex w-full items-center gap-2 md:min-w-[170px] md:text-lg"
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
            className="w-full border-none bg-transparent px-0 text-center text-xl dark:text-white"
          />
        </div>

        <Button
          disabled={isLoading}
          className="rounded-xl py-3 text-lg md:text-xl"
        >
          {isLoading && <Icons.spinner className="mr-2 h-5 w-5 animate-spin" />}
          Build trip
        </Button>
      </div>
    </form>
  );
}
