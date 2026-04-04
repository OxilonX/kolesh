"use client";
//shadcn imports
import { Checkbox } from "@/components/ui/checkbox";
//icons imports
import { IconCircleMinus } from "@tabler/icons-react";
//types imports
import { tasksProp } from "@/types/goalsTypes";
import axios from "axios";
import { BASE_URL } from "@/utils/getBaseUrl";
import { toast } from "sonner";
import { useGoalsContext } from "@/app/contexts/GoalsContext";
const TaskItem = ({ tasksProp }: { tasksProp: tasksProp }) => {
  const { setTasks } = useGoalsContext();
  const handleDeleteTaskClick = () => {
    const deleteTask = async () => {
      const response = await axios.delete(`${BASE_URL}/tasks/${tasksProp.id}`, {
        withCredentials: true,
      });
      return response.data;
    };
    toast.promise(deleteTask(), {
      loading: "deleting the task...",
      success: () => {
        setTasks((prev) => [...prev.filter((t) => t.id != tasksProp.id)]);
        return `Task successfully deleted. `;
      },
      error: "Failed to delete task.",
    });
  };
  const handleCheckTaskClick = () => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === tasksProp.id ? { ...t, isDone: !t.isDone } : t,
      ),
    );

    const checkTask = async () => {
      const response = await axios.put(
        `${BASE_URL}/tasks/check/${tasksProp.id}`,
        { isDone: tasksProp.isDone },
        { withCredentials: true },
      );
      return response.data;
    };

    toast.promise(checkTask(), {
      loading: "Saving status...",
      success: "Synced!",
      error: () => {
        setTasks((prev) =>
          prev.map((t) =>
            t.id === tasksProp.id ? { ...t, isDone: tasksProp.isDone } : t,
          ),
        );
        return "Failed to save. Reverting...";
      },
    });
  };
  return (
    <div className="cursor-pointer  bg-muted/10 hover:bg-muted/50  p-4 rounded-xl flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <div className="">
          <Checkbox
            onClick={handleCheckTaskClick}
            checked={tasksProp.isDone}
            className="size-7 rounded-full "
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xl truncate text-foreground font-medium">
            {tasksProp.name}
          </p>
          <span className="text-xs text-muted-foreground">
            {tasksProp.createdAt}
          </span>
        </div>
      </div>

      <div>
        <button onClick={handleDeleteTaskClick} className="">
          <IconCircleMinus className="cursor-pointer hover:scale-105 size-7 stroke-destructive transition-all duration-300" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
