import React from "react";
import { FaPlane } from "react-icons/fa";

import AIGeneratedTripForm from "../Forms/AIGeneratedTripForm";
import { Button } from "../ShadUI/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ShadUI/dialog";

const TBgGenerateTripButton = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"outline"} size={"sm"} className="gap-1">
          <span className="hidden md:block">A.I </span>Generate
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <h1 className="text-center text-3xl">
            A<span className="text-brandDark dark:text-brandLight">.I</span>{" "}
            Generate
          </h1>
        </DialogHeader>
        <AIGeneratedTripForm />
      </DialogContent>
    </Dialog>
  );
};

export default TBgGenerateTripButton;
