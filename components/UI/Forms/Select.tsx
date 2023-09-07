import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/ShadUI/select";
import React from "react";

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
      <SelectTrigger className="border-black md:text-lg h-14 md:h-16 dark:border-white rounded-xl">
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
