"use client";
import { useEffect } from "react";
//shadcn imports
import { Button } from "@/components/ui/button";
//icons imports
import { IconPlus } from "@tabler/icons-react";
//local comps imports
import TaskItem from "./TaskItem";
//contexts imports
import { useGoalsContext } from "@/app/contexts/GoalsContext";
//types imports
import { tasksType } from "@/types/goalsTypes";
//utils imports
import axios from "axios";
import { BASE_URL } from "@/utils/getBaseUrl";
import { toast } from "sonner";

const TasksCard = () => {
  const { tasks, setTasks } = useGoalsContext();
  const fetchTasks = async (): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/tasks`, {
      withCredentials: true,
    });
    setTasks(response.data.tasks);
    return response.data.tasks;
  };

  useEffect(() => {
    toast.promise(fetchTasks(), {
      loading: "Syncing your dashboard...",
      success: (data) => `Successfully loaded ${data.length} tasks`,
      error: "Failed to fetch tasks.",
    });
  }, []);
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
