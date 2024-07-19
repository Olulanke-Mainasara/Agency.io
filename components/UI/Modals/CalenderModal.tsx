import React from "react";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/UI/ShadUI/button";
import { Calendar } from "@/components/UI/ShadUI/calendar";

import { Popover, PopoverContent, PopoverTrigger } from "../ShadUI/popover";

export function CalendarModal({ handleDate }: { handleDate: Function }) {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  React.useEffect(() => {
    const day = date?.toLocaleString();
  }, [date, handleDate]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id="date"
          variant={"outline"}
          className={cn(
            "h-14 justify-start rounded-xl border-black bg-transparent px-3 font-normal duration-300 dark:border-gray-400 dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black md:h-16 md:text-lg"
          )}
        >
          <CalendarIcon />
          {date ? <>{date.toLocaleString()}</> : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar initialFocus mode="single" selected={date} />
      </PopoverContent>
    </Popover>
  );
}
