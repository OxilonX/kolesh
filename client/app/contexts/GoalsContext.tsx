"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { tasksType } from "@/types/goalsTypes";

interface GoalsContextType {
  tasks: tasksType[];
  setTasks: (tasks: tasksType[] | ((prev: tasksType[]) => tasksType[])) => void;
}

const GoalsContext = createContext<GoalsContextType | undefined>(undefined);

export const GoalsProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<tasksType[]>([]);

  return (
    <GoalsContext.Provider value={{ tasks, setTasks }}>
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoalsContext = () => {
  const context = useContext(GoalsContext);
  if (!context) {
    throw new Error("useGoalsContext must be used within a GoalsProvider");
  }
  return context;
};
