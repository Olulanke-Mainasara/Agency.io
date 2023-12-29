"use client";

import React from "react";
import { notifications } from "@/static-data/services";
import { BellRing } from "lucide-react";

import useMedia from "@/hooks/useMedia";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/UI/ShadUI/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/ShadUI/popover";

import { NotificationCard } from "../../Cards/NotificationCard";

export function Notifications({ size }: { size: number }) {
  const [open, setOpen] = React.useState(false);
  const isMobile = useMedia("(max-width: 767px)");

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger className="outline-none">
          {notifications.length > 0 ? (
            <span className="relative max-w-[24px] text-black">
              <span className="absolute right-1 top-0 -mr-1 -mt-1 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span>
              </span>
              <BellRing
                size={size}
                className="hover:cursor-pointer dark:text-white"
              />
            </span>
          ) : (
            <BellRing
              size={20}
              className="outline-none hover:cursor-pointer dark:text-white"
            />
          )}
        </DrawerTrigger>
        <DrawerContent>
          <NotificationCard />
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {notifications.length > 0 ? (
          <span className="relative max-w-[24px] text-black">
            <span className="absolute right-1 top-0 -mr-1 -mt-1 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span>
            </span>
            <BellRing
              size={size}
              className="hover:cursor-pointer dark:text-white"
            />
          </span>
        ) : (
          <BellRing
            size={20}
            className="hover:cursor-pointer dark:text-white"
          />
        )}
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <NotificationCard />
      </PopoverContent>
    </Popover>
  );
}
