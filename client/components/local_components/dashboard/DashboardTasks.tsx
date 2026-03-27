//shadcn imports
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
const DashboardTasks = ({ dummyTasks }: { dummyTasks: any }) => {
  return (
    <Card className=" bg-card-secondary border h-[240px] overflow-y-auto ">
      <CardContent className="flex flex-col flex-1 min-h-0 p-4 overflow-y-auto no-scrollbar gap-4">
        <CardHeader className="px-0 shrink-0">
          <CardTitle className="flex items-center justify-between gap-2">
            <h2 className="text-foreground text-2xl font-black uppercase">
              Today
            </h2>
            <Button className="hover:bg-primary/70 transition-all duration-300">
              <IconPlus />
              Add Task
            </Button>
          </CardTitle>
        </CardHeader>
        {dummyTasks.length > 0 ? (
          <ul className="grid grid-cols-1 gap-2">
            <span className="flex flex-col  text-base font-bold text-muted-foreground">
              Pending
              <hr className="w-full my-0.5 rounded-full bg-muted-foreground " />
            </span>
            {dummyTasks
              .filter((t: any) => !t.isChecked)
              .map((t: any, i: any) => (
                <li
                  key={i}
                  className="gap-2 flex items-center justify-between rounded-md bg-muted/10 p-3"
                >
                  <div className="flex flex-col  gap-1 flex-1 min-w-0">
                    <p
                      title={t.task}
                      className={`text-sm font-medium text-muted-foreground truncate ${t.isChecked ? "line-through" : ""}`}
                    >
                      {t.task}
                    </p>
                    <span className="text-[0.6rem] text-muted font-medium">
                      {t.date}
                    </span>
                  </div>

                  <div className="">
                    <Checkbox
                      checked={t.isChecked}
                      className="w-6 h-6 rounded-full !bg-muted/50 data-[state=checked]:!bg-primary"
                    />
                  </div>
                </li>
              ))}
            <span className="pt-1 flex flex-col  text-base font-bold text-muted-foreground ">
              Done
              <hr className="w-full my-0.5 rounded-full bg-muted-foreground " />
            </span>
            {dummyTasks
              .filter((t: any) => t.isChecked)
              .map((t: any, i: any) => (
                <li
                  key={i}
                  className="gap-2 flex items-center justify-between rounded-md bg-muted/10 p-3"
                >
                  <div className="flex flex-col  gap-1 flex-1 min-w-0">
                    <p
                      title={t.task}
                      className={`text-sm font-medium text-muted-foreground truncate ${t.isChecked ? "line-through" : ""}`}
                    >
                      {t.task}
                    </p>
                    <span className="text-[0.6rem] text-muted font-medium">
                      {t.date}
                    </span>
                  </div>

                  <div className="">
                    <Checkbox
                      checked={t.isChecked}
                      className="w-6 h-6 rounded-full !bg-muted/50 data-[state=checked]:!bg-primary"
                    />
                  </div>
                </li>
              ))}
          </ul>
        ) : (
          <div className="flex flex-1 items-center justify-center min-h-0">
            <div className="text-center space-y-1">
              <h3 className="text-sm font-bold text-foreground tracking-tight">
                All caught up
              </h3>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
                No tasks for today. Enjoy your time.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DashboardTasks;
