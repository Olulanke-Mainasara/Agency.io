import React from "react";

import ExploreTheWorldForm from "../Forms/ExploreTheWorldForm";
import { Button } from "../ShadUI/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ShadUI/dialog";

const TBgExploreButton = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"outline"} size={"sm"} className="gap-1">
          Explore<span className="hidden md:block">the world</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex-row items-center justify-center gap-2">
          <h1 className="text-center text-3xl">
            Explore{" "}
            <span className="text-brandDark dark:text-brandLight">the</span>{" "}
            world
          </h1>
        </DialogHeader>
        <ExploreTheWorldForm />
      </DialogContent>
    </Dialog>
  );
};

export default TBgExploreButton;
