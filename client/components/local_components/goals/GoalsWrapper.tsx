"use client";

import { GoalsProvider } from "@/app/contexts/GoalsContext";
import { ReactNode } from "react";

const GoalsWrapper = ({ children }: { children: ReactNode }) => {
  return <GoalsProvider>{children}</GoalsProvider>;
};

export default GoalsWrapper;
