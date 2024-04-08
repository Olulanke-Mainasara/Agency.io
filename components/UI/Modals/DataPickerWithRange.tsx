import React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/UI/ShadUI/button";
import { Calendar } from "@/components/UI/ShadUI/calendar";

import { Dialog, DialogContent, DialogTrigger } from "../ShadUI/dialog";

export function DatePickerWithRange({
  handleDateRange,
}: {
  handleDateRange: Function;
}) {
  const [date, setDate] = React.useState<DateRange | undefined>();

  React.useEffect(() => {
    const range = date?.from
      ? date.to
        ? `${format(date.from, "LLL dd, y")} - ${format(date.to, "LLL dd, y")}`
        : `${format(date.from, "LLL dd, y")} - `
      : "";

    handleDateRange(range);
  }, [date, handleDateRange]);

  return (
    <div className={cn("grid w-full basis-1/2 gap-2")}>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "h-14 justify-start rounded-xl border-black bg-transparent px-3 font-normal duration-300 dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black md:h-16 md:text-lg"
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                <>{format(date.from, "LLL dd, y")} - </>
              )
            ) : (
              <span>Check in - Check out</span>
            )}
          </Button>
        </DialogTrigger>
        <DialogContent className="w-auto p-0">
          <Calendar
            initialFocus
            mode="range"
            selected={date}
            onSelect={(dateRange) => setDate(dateRange)}
            numberOfMonths={2}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
