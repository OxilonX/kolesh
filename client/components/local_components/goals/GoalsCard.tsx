"use client";
//local comps imports
import GoalsItem from "./GoalsItem";
//shadcn imports
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
//types imports
import { goalsItemProps } from "@/types/goalsTypes";
//react imports
import { useEffect } from "react";
//contexts imports
import { useGoalsContext } from "@/contexts/GoalsContext";
const { goals, fetchGoals, goalsLoaded } = useGoalsContext();
//icons imports
import { IconPlus } from "@tabler/icons-react";
const GoalsCard = () => {
  useEffect(() => {
    if (!goalsLoaded) {
      toast.promise(fetchGoals(), {
        loading: "Syncing your dashboard...",
        success: (data) => {
          return Array.isArray(data)
            ? `Successfully loaded ${data.length} tasks`
            : `Goals Data synced`;
        },
        error: "Failed to fetch tasks.",
        duration: 500,
      });
    }
  }, [goalsLoaded, fetchGoals]);
  if (goals.length < 1) {
    return (
      <div className="flex  items-center justify-center p-8 text-muted-foreground border border-dashed rounded-xl h-full">
        <p className="text-2xl font-bold">
          No tasks found. Click the{" "}
          <Button
            disabled
            className="uppercase py-4 mx-2 hover:bg-primary/80 font-medium px-4 "
          >
            <IconPlus className="size-4 " />
            Tasks
          </Button>{" "}
          button to add new tasks.
        </p>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 py-4 ">
      <ul className="flex flex-col gap-2">
        {goals.map((goal, i) => (
          <li key={`${goal.startDate} - ${i}`}>
            <GoalsItem goalsProp={goal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalsCard;
