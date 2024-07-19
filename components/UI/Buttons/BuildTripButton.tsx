import React from "react";
import { FaPlane } from "react-icons/fa";

import BuildTripForm from "../Forms/BuildTripForm";
import { Button } from "../ShadUI/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ShadUI/dialog";

const BuildTripButton = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={"sm"} className="rounded-full text-lg xl:px-8">
          Build your trip
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex-row items-center justify-center gap-2">
          <h1 className="text-center text-3xl">
            Build{" "}
            <span className="text-brandDark dark:text-brandLight">your</span>{" "}
            Trip
          </h1>
          <FaPlane className="text-4xl" />
        </DialogHeader>
        <BuildTripForm />
      </DialogContent>
    </Dialog>
  );
};

export default BuildTripButton;
