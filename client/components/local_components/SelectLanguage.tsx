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
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent
        position={alignItemWithTrigger ? "item-aligned" : "popper"}
      >
        <SelectGroup>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="ar">Frensh</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
