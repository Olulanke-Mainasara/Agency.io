import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/ShadUI/select";
import * as React from "react";

export function SelectOption({
  label,
  items,
  handleSelect,
}: {
  label: string;
  items: Array<{
    id: number;
    option: string;
  }>;
  handleSelect: Function;
}) {
  return (
    <Select onValueChange={(value) => handleSelect(value)}>
      <SelectTrigger className="h-16 text-lg border-black dark:border-white rounded-xl">
        <SelectValue placeholder={label} />
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
