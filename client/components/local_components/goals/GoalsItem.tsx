//shadcn imports
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
//icons imports
import { IconLink } from "@tabler/icons-react";
//types imports
import { goalsItemProps } from "@/types/goalsTypes";
const GoalsItem = ({ goalsProp }: { goalsProp: goalsItemProps }) => {
  return (
    <div className="cursor-pointer flex flex-col gap-2 w-full bg-muted/10 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-1">
          <p className="text-xl truncate text-foreground font-medium">
            {goalsProp.name}
          </p>
          <span className="text-xs text-muted-foreground">
            {goalsProp.startDate}
          </span>
        </div>
        <div>
          <Button
            variant={"outline"}
            className="font-bold text-lg rounded-xl text-foreground py-5 px-6 !bg-accent/60 "
          >
            {goalsProp.value}% Completed
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-full">
          <Progress value={goalsProp.value} />
        </div>
        <div className="flex items-center justify-between">
          <div className="cursor-pointer flex items-center gap-2 group">
            <IconLink className="size-4 stroke-muted group-hover:stroke-foreground transition-all duration-300" />
            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-all duration-300">
              {goalsProp.taskNumber} Task
            </span>
          </div>
          <p className="text-xs font-medium text-muted-foreground">
            Until : {goalsProp.endDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoalsItem;
