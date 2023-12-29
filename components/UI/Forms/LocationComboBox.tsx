import React from "react";
import { Check, ChevronsUpDown, Map, MapPin } from "lucide-react";

import { Button } from "@/components/UI/ShadUI/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/UI/ShadUI/command";

import { Dialog, DialogContent, DialogTrigger } from "../ShadUI/dialog";

export function LocationComboBox({
  label,
  handleLocation,
}: {
  label: string;
  handleLocation: Function;
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="h-14 w-full grow basis-1/2 justify-between rounded-xl border-black bg-transparent px-3 font-normal duration-300 dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black md:h-16 md:text-lg"
        >
          <div className="flex w-full items-center gap-2">
            <Map />
            {value ? value.charAt(0).toUpperCase() + value.slice(1) : label}
          </div>

          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <Command>
          <CommandInput placeholder={label} />
          <CommandEmpty>No location found.</CommandEmpty>
          <CommandGroup>
            <CommandItem
              onSelect={(currentValue: string) => {
                handleLocation(currentValue === value ? "" : currentValue);
                setValue(currentValue === value ? "" : currentValue);
                setOpen(false);
              }}
            >
              {value === "nearby" ? (
                <Check className="mr-2 h-4 w-4" />
              ) : (
                <MapPin className="mr-2 h-4 w-4" />
              )}
              Nearby
            </CommandItem>
          </CommandGroup>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
