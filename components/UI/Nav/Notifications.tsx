"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/ShadUI/popover";
import { notifications } from "@/static-data/notifications";
import { BellRing } from "lucide-react";
import React from "react";

import { NotificationCard } from "../Cards/NotificationCard";

export function Notifications({ size }: { size: number }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {notifications.length > 0 ? (
          <span className="relative text-black">
            <span className="absolute top-0 flex w-2 h-2 -mt-1 -mr-1 right-1">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-sky-400"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-sky-500"></span>
            </span>
            <BellRing
              size={size}
              className="dark:text-white hover:cursor-pointer"
            />
          </span>
        ) : (
          <BellRing
            size={20}
            className="dark:text-white hover:cursor-pointer"
          />
        )}
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <NotificationCard />
      </PopoverContent>
    </Popover>
  );
}
