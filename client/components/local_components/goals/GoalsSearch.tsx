"use client";

import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

//shadcn imports
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
//icons imports
import {
  IconSearch,
  IconFilter,
  IconPlus,
  IconCategoryPlus,
} from "@tabler/icons-react";
//react imports
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { BASE_URL } from "@/utils/getBaseUrl";
//types imports
import { goalType, tasksType, Priority } from "@/types/goalsTypes";
//contexts imports
import { useGoalsContext } from "@/contexts/GoalsContext";

const GoalsSearch = ({ isGoals }: { isGoals: boolean }) => {
  const { setTasks, setGoals } = useGoalsContext();
  const [taskInput, setTaskInput] = useState<string>("");
  const [goalInput, setGoalInput] = useState<string>("");
  const [priority, setPriority] = useState<Priority>("CASUAL");
  const [open, setOpen] = useState<boolean>(false);
  const [endDate, setEndDate] = useState<Date>(new Date());

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
      loading: "Adding your new task...",
      success: (data) => {
        setTaskInput("");
        setOpen(false);
        return `Successfully added ${data.name}`;
      },
      error: "Failed to add task.",
    });
  };
  const handleAddGoalClick = () => {
    if (!goalInput.trim())
      return toast.error("Enter Goal Title first in the input above.", {
        position: "bottom-right",
      });
    const addGoal = async (): Promise<any> => {
      const response = await axios.post(
        `${BASE_URL}/goals`,
        { name: goalInput },
        { withCredentials: true },
      );
      const goal: goalType = response.data.goal;
      setGoals((prev: goalType[]) => [...prev, goal]);
      return response.data.goal;
    };

    toast.promise(addGoal(), {
      loading: "Adding your new goal...",
      success: (data) => {
        setGoalInput("");
        setOpen(false);
        return `Successfully added ${data.name}`;
      },
      error: "Failed to add goal.",
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
          {isGoals ? <div></div> : null}
          <div className="grid gap-2">
            <Label htmlFor="title" className="text-sm font-medium">
              {isGoals ? "Goal Title" : "Task Content"}
            </Label>
            {isGoals ? (
              <div className="flex items-center gap-2">
                <Input
                  name="name"
                  id="goal-title"
                  value={goalInput}
                  onChange={(e) => setGoalInput(e.target.value)}
                  placeholder={"e.g., Win the ballon d'or"}
                  className="w-full flex-1 "
                />{" "}
                <Select
                  defaultValue="casual"
                  value={priority}
                  onValueChange={(value: string) => {
                    const realValue = value.toUpperCase() as Priority;
                    setPriority(realValue);
                  }}
                >
                  <SelectTrigger className="capitalize cursor-pointer ">
                    <SelectValue className="" placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent position={"item-aligned"}>
                    <SelectGroup className="capitalize">
                      <SelectItem value="goated">goated</SelectItem>
                      <SelectItem value="vibing">vibing</SelectItem>
                      <SelectItem value="major">major</SelectItem>
                      <SelectItem value="casual">casual</SelectItem>
                      <SelectItem value="trash">trash</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            ) : (
              <Input
                name="name"
                id="task-title"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder={"e.g., Clean the dishes"}
                className="col-span-3"
              />
            )}
            {isGoals ? (
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      data-empty={!endDate}
                      className="w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                    >
                      {endDate ? (
                        format(endDate, "PPP")
                      ) : (
                        <span>Pick an End Date</span>
                      )}
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      selected={endDate}
                      onSelect={setEndDate}
                      defaultMonth={endDate}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            ) : null}
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
              onClick={isGoals ? handleAddGoalClick : handleAddTaskClick}
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
