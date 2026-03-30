"use client";
//shadcn imports
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
//icons imports
import { IconSearch, IconFilter, IconPlus } from "@tabler/icons-react";
const GoalsSearch = ({ isGoals }: { isGoals: boolean }) => {
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
      <Button className="uppercase py-6 hover:bg-primary/80 font-bold px-4 ">
        <IconPlus className="size-6 " />
        {isGoals ? "Goal" : "Task"}
      </Button>
    </div>
  );
};

export default GoalsSearch;
