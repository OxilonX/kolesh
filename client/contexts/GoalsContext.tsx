"use client";
import React, { createContext, useContext, useState, useRef } from "react";
import axios from "axios";
import { BASE_URL } from "@/utils/getBaseUrl";
import { goalType, tasksType, categoryType } from "@/types/goalsTypes";

interface GoalsContextType {
  tasks: tasksType[];
  goals: goalType[];
  categories: categoryType[];
  setGoals: React.Dispatch<React.SetStateAction<goalType[]>>;
  setTasks: React.Dispatch<React.SetStateAction<tasksType[]>>;
  setCategories: React.Dispatch<React.SetStateAction<categoryType[]>>;
  fetchTasks: () => Promise<tasksType[] | void>;
  fetchGoals: () => Promise<goalType[] | void>;
  fetchCategories: () => Promise<categoryType[] | void>;
  tasksLoaded: boolean;
  goalsLoaded: boolean;
  categoriesLoaded: boolean;
}

const GoalsContext = createContext<GoalsContextType | undefined>(undefined);

export const GoalsProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<tasksType[]>([]);
  const [goals, setGoals] = useState<goalType[]>([]);
  const [categories, setCategories] = useState<categoryType[]>([]);

  // Independent loading states
  const [tasksLoaded, setTasksLoaded] = useState(false);
  const [goalsLoaded, setGoalsLoaded] = useState(false);
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);

  // Refs to prevent parallel duplicate requests
  const isFetchingTasks = useRef(false);
  const isFetchingGoals = useRef(false);
  const isFetchingCats = useRef(false);

  const fetchTasks = async () => {
    if (tasksLoaded || isFetchingTasks.current) return tasks;
    isFetchingTasks.current = true;
    try {
      const res = await axios.get(`${BASE_URL}/tasks`, {
        withCredentials: true,
      });
      const data = res.data.tasks || [];
      setTasks(data);
      setTasksLoaded(true);
      return data;
    } finally {
      isFetchingTasks.current = false;
    }
  };

  const fetchGoals = async () => {
    if (goalsLoaded || isFetchingGoals.current) return goals;
    isFetchingGoals.current = true;
    try {
      const res = await axios.get(`${BASE_URL}/goals`, {
        withCredentials: true,
      });
      const data = res.data.goals || [];
      setGoals(data);
      setGoalsLoaded(true);
      return data;
    } finally {
      isFetchingGoals.current = false;
    }
  };

  const fetchCategories = async () => {
    if (categoriesLoaded || isFetchingCats.current) return categories;
    isFetchingCats.current = true;
    try {
      const res = await axios.get(`${BASE_URL}/categories`, {
        withCredentials: true,
      });
      const data = res.data.categories || [];
      setCategories(data);
      setCategoriesLoaded(true);
      return data;
    } finally {
      isFetchingCats.current = false;
    }
  };

  return (
    <GoalsContext.Provider
      value={{
        tasks,
        setTasks,
        goals,
        setGoals,
        categories,
        setCategories,
        fetchTasks,
        fetchGoals,
        fetchCategories,
        tasksLoaded,
        goalsLoaded,
        categoriesLoaded,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoalsContext = () => {
  const context = useContext(GoalsContext);
  if (!context)
    throw new Error("useGoalsContext must be used within a GoalsProvider");
  return context;
};
