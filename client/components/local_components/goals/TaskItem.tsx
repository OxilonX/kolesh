//shadcn imports
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
//icons imports
import { IconCircleMinus } from "@tabler/icons-react";
//types imports
import { tasksProp } from "@/types/goalsTypes";
const TaskItem = ({ tasksProp }: { tasksProp: tasksProp }) => {
  return (
    <div className="cursor-pointer  bg-muted/10 hover:bg-muted/50  p-4 rounded-xl flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <div className="">
          <Checkbox
            checked={tasksProp.isDone}
            className="size-7 rounded-full"
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
        <button className="">
          <IconCircleMinus className="cursor-pointer hover:scale-105 size-7 stroke-destructive transition-all duration-300" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
