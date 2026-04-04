"use client";
//shadcn imports
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
//icons imports
import { IconSearch, IconFilter, IconPlus } from "@tabler/icons-react";
//react imports
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { BASE_URL } from "@/utils/getBaseUrl";
import { tasksType } from "@/types/goalsTypes";
import { useGoalsContext } from "@/app/contexts/GoalsContext";

const GoalsSearch = ({ isGoals }: { isGoals: boolean }) => {
  const { setTasks } = useGoalsContext();
  const [taskInput, setTaskInput] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const handleAddTaskClick = () => {
    if (!taskInput.trim())
      return toast.error("Enter Task content first in the input above.", {
        position: "bottom-right",
      });
    const addTask = async (): Promise<any> => {
      const response = await axios.post(
        `${BASE_URL}/tasks`,
        { name: taskInput },
        { withCredentials: true },
      );
      const task: tasksType = response.data.task;
      setTasks((prev: tasksType[]) => [...prev, task]);
      return response.data.task;
    };

    toast.promise(addTask(), {
      loading: "Addid your new task...",
      success: (data) => {
        setTaskInput("");
        setOpen(false);
        return `Successfully added ${data.name}`;
      },
      error: "Failed to add task.",
    });
  };
  return (
    <div className="flex items-center  gap-2">
      <div className="relative  flex items-center w-full">
        <Input
          className="flex-1 py-6 border"
          placeholder={
            isGoals ? "Search your goals here..." : "Search your tasks here..."
          }
        />
        <div className="absolute right-2 flex items-center gap-2">
          <IconSearch className="cursor-pointer size-10 p-2 hover:bg-muted rounded-full transition-all duration-300" />
        </div>
      </div>
      <Button
        variant={"outline"}
        className="uppercase py-6 hover:bg-primary/80 font-bold px-4 "
      >
        <IconFilter className="cursor-pointer size-6  transition-all duration-300" />
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="uppercase py-6 hover:bg-primary/80 font-bold px-4 ">
            <IconPlus className="size-6 " />
            {isGoals ? "Goal" : "Task"}
          </Button>
        </DialogTrigger>
        <DialogContent className=" py-8 px-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              {isGoals ? "Define a New Goal" : "Create a New Task"}
            </DialogTitle>

            <DialogDescription className="text-sm text-muted-foreground">
              {isGoals
                ? "Set a long-term milestone. Break it down into smaller steps later to stay on track."
                : "Add a specific action item to your list. Give it a deadline to boost your productivity."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-2">
            <Label htmlFor="title" className="text-sm font-medium">
              {!isGoals ? "Task Content" : "Goal Title"}
            </Label>
            <Input
              name="name"
              id="title"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder={
                !isGoals
                  ? "e.g., Clean the dishes"
                  : "e.g., Win the ballon d'or"
              }
              className="col-span-3"
            />
          </div>
          <div className="flex flex-row items-center justify-end gap-4 w-full ">
            <DialogClose asChild>
              <Button
                variant={"destructive"}
                type="button"
                className="px-6 py-4"
              >
                Close
              </Button>
            </DialogClose>
            <Button
              onClick={
                isGoals
                  ? () => {
                      return null;
                    }
                  : handleAddTaskClick
              }
              className="px-6 py-4"
            >
              Add {isGoals ? "Goal" : "Task"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GoalsSearch;
