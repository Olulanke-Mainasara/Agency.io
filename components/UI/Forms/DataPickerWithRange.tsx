import { Button } from "@/components/UI/ShadUI/button";
import { Calendar } from "@/components/UI/ShadUI/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/ShadUI/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import React from "react";
import { DateRange } from "react-day-picker";

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
    <div className={cn("grid gap-2 w-full basis-1/2")}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "h-14 md:h-16 border-black justify-start rounded-xl font-normal md:text-lg bg-transparent dark:bg-transparent dark:hover:bg-white dark:hover:text-black duration-300 dark:text-white dark:border-white px-3"
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
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            selected={date}
            onSelect={(dateRange) => setDate(dateRange)}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
