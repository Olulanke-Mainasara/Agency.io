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
import { cn } from "@/lib/utils";
import { allLocations } from "@/static-data/continents";
import { Check, ChevronsUpDown, Map } from "lucide-react";
import React from "react";

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
          className="justify-between w-full px-3 font-normal bg-transparent border-black duration-300 h-14 md:h-16 md:text-lg rounded-xl basis-1/2 dark:bg-transparent dark:hover:bg-white dark:hover:text-black dark:text-white dark:border-white"
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
                key={location.value}
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
