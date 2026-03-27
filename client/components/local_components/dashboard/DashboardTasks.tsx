//shadcn imports
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
const DashboardTasks = ({ dummyTasks }: { dummyTasks: any }) => {
  {
    /* <span className="text-sm text-primary font-bold flex flex-col gap-2 w-full  rounded-full">
            Pending
            <hr className="bg-muted w-full" />
          </span> */
  }
  return (
    <Card className=" min-h-full ">
      <CardContent className="flex flex-col gap-4 ">
        <CardHeader className="px-0">
          <CardTitle className="flex items-center justify-between gap-2">
            <h2>Today Tasks</h2>
            <Button className="hover:bg-primary/70 transition-all duration-300">
              <IconPlus />
              Add Task
            </Button>
          </CardTitle>
        </CardHeader>
        {dummyTasks.length > 0 ? (
          <ul className="  grid grid-cols-1 gap-2">
            {dummyTasks.map((t: any) => (
              <li
                key={t.id}
                className="gap-2 flex items-center justify-between  rounded-md bg-muted/10 p-3 "
              >
                <p
                  title={t.task}
                  className={`text-sm font-medium text-muted-foreground truncate ${t.isChecked ? "line-through" : ""}`}
                >
                  {t.task}
                </p>
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
          <div className="flex items-center justify-center h-full w-full">
            <p className="text-lg text-muted-foreground font-medium ">
              You have no tasks for today.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DashboardTasks;
