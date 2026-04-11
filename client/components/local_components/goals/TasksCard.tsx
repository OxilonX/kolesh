"use client";
import { useEffect } from "react";
//shadcn imports
import { Button } from "@/components/ui/button";
//icons imports
import { IconPlus } from "@tabler/icons-react";
//local comps imports
import TaskItem from "./TaskItem";
//contexts imports
import { useGoalsContext } from "@/contexts/GoalsContext";
//utils imports
import { toast } from "sonner";

const TasksCard = () => {
  const { tasks, fetchTasks, tasksLoaded } = useGoalsContext();

  useEffect(() => {
    if (!tasksLoaded) {
      toast.promise(fetchTasks(), {
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
  }, [tasksLoaded, fetchTasks]);
  if (tasks.length < 1) {
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
        {Array.isArray(tasks) &&
          tasks.map((task, i) => (
            <li key={`${task.id} - ${i}`}>
              <TaskItem tasksProp={task} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TasksCard;
