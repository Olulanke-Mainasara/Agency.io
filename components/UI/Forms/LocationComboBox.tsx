import React from "react";
import { allLocations } from "@/static-data/continents";
import { Check, ChevronsUpDown, Map } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/UI/ShadUI/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/UI/ShadUI/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/ShadUI/popover";

export function LocationComboBox({
  label,
  width,
  handleLocation,
}: {
  label: string;
  width: string;
  handleLocation: Function;
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="h-14 w-full max-w-[450px] grow basis-1/2 justify-between rounded-xl border-black bg-transparent px-3 font-normal duration-300 dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black md:h-16 md:text-lg"
        >
          <div className="flex items-center w-full gap-2">
            <Map />
            {value
              ? allLocations.find((location) => location.value === value)?.label
              : label}
          </div>

          <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={`${width} p-0`}>
        <Command>
          <CommandInput placeholder={label} />
          <CommandEmpty>No location found.</CommandEmpty>
          <CommandGroup>
            {allLocations.map((location) => (
              <CommandItem
                key={location.id}
                onSelect={(currentValue: string) => {
                  handleLocation(currentValue === value ? "" : currentValue);
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === location.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {location.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
