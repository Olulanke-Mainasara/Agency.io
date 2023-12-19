import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/ShadUI/select";

export function SelectOption({
  label,
  items,
  handleSelect,
  icon,
}: {
  label: string;
  items: Array<{
    id: number;
    option: string;
  }>;
  handleSelect: Function;
  icon: React.ReactNode;
}) {
  return (
    <Select onValueChange={(value) => handleSelect(value)}>
      <SelectTrigger className="border-black h-14 rounded-xl dark:border-white md:h-16 md:text-lg">
        <div className="flex items-center w-full gap-2">
          {icon} <SelectValue placeholder={label} />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item) => (
            <SelectItem key={item.id} value={item.option}>
              {item.option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
