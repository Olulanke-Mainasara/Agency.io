import React from "react";
import { FaPlane } from "react-icons/fa";

import BuildTripForm from "../Forms/BuildTripForm";
import { Button } from "../ShadUI/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ShadUI/dialog";

const TBgBuildTripButton = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"outline"} size={"sm"} className="gap-1">
          Build <span className="hidden md:block">your trip</span>
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader className="flex-row items-center justify-center gap-2">
          <DialogTitle>
            Build{" "}
            <span className="text-brandDark dark:text-brandLight">your</span>{" "}
            Trip
          </DialogTitle>
          <FaPlane className="text-4xl" />
        </DialogHeader>
        <BuildTripForm />
      </DialogContent>
    </Dialog>
  );
};

export default TBgBuildTripButton;
