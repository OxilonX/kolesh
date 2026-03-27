"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function SelectLanguage() {
  const [alignItemWithTrigger, setAlignItemWithTrigger] =
    useState<Boolean>(true);

  return (
    <Select defaultValue="en">
      <SelectTrigger className={"cursor-pointer"}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent
        position={alignItemWithTrigger ? "item-aligned" : "popper"}
      >
        <SelectGroup>
          <SelectItem className={"cursor-pointer"} value="en">
            English
          </SelectItem>
          <SelectItem className={"cursor-pointer"} value="ar">
            Frensh
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
