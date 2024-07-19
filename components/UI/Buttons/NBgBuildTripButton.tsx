import React from "react";
import { ArrowRight } from "lucide-react";
import { FaPlane } from "react-icons/fa";

import BuildTripForm from "../Forms/BuildTripForm";
import { Button } from "../ShadUI/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ShadUI/dialog";

const NBgBuildTripButton = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"link"}
          className="min-w-[110px] p-0 text-black dark:text-white"
        >
          Build your trip{" "}
          <span className="text-brandDark duration-300 group-hover:translate-x-1 dark:text-brandLight">
            <ArrowRight size={20} />
          </span>
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

export default NBgBuildTripButton;
