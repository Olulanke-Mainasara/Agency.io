"use client";

import React from "react";
import { PlusCircle } from "lucide-react";

import { Dialog, DialogContent, DialogTrigger } from "../ShadUI/dialog";

export function AddReviewModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="group flex flex-col items-center justify-center space-y-2 rounded-xl border border-brandDark p-6 duration-300 hover:cursor-pointer hover:border-black dark:hover:border-white dark:hover:text-white">
          <PlusCircle
            className="text-brandDark duration-300 group-hover:text-black dark:group-hover:text-white"
            size={55}
          />
          <p className="text-xl md:text-2xl">Add your own review</p>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-background">
        <div className="h-20 bg-background"></div>
      </DialogContent>
    </Dialog>
  );
}
