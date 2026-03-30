//shadcn imports
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
//icons imports
import { IconPlus } from "@tabler/icons-react";
const DashboardGoals = ({ dummyGoals }: { dummyGoals: any }) => {
  return (
    <Card className=" bg-card-secondary border h-[230px] overflow-y-auto ">
      <CardContent className="flex flex-col flex-1 min-h-0 p-4 overflow-y-auto no-scrollbar gap-4">
        <CardHeader className="px-0 shrink-0">
          <CardTitle className="flex items-center justify-between gap-2">
            <h2 className="text-foreground text-2xl font-black uppercase">
              Goals
            </h2>
            <Button className="hover:bg-primary/70 transition-all duration-300">
              <IconPlus />
              Add goal
            </Button>
          </CardTitle>
        </CardHeader>
        {dummyGoals.length > 0 ? (
          <ul className="grid grid-cols-1 gap-2">
            <span className="flex flex-col  text-base font-bold text-muted-foreground ">
              My goals
              <hr className="w-full my-0.5 rounded-full bg-muted-foreground " />
            </span>
            {dummyGoals.map((g: any, i: any) => (
              <li
                key={i}
                className="gap-4 flex items-center justify-between rounded-md bg-muted/10 p-3"
              >
                <div className="flex flex-col  gap-2 flex-1 min-w-0">
                  <p
                    title={g.name}
                    className={`text-sm font-medium text-muted-foreground truncate ${g.isChecked ? "line-through" : ""}`}
                  >
                    {g.name}
                  </p>
                  <Progress value={g.progress} />
                </div>

                <p className="text-muted-foreground text-base">
                  {i}/{g.tasksCount}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-1 items-center justify-center min-h-0">
            <div className="text-center space-y-1">
              <h3 className="text-sm font-bold text-foreground tracking-tight">
                No active goals
              </h3>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
                Ready to start something new ?
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DashboardGoals;
