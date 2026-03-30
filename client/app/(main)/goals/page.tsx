//shadcn imports
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
//local comps imports
import GoalsCard from "@/components/local_components/goals/GoalsCard";
import GoalsSearch from "@/components/local_components/goals/GoalsSearch";
import TasksCard from "@/components/local_components/goals/TasksCard";
const GoalsPage = () => {
  return (
    <div className="h-[calc(100vh-2.5rem)] px-4 py-4">
      <Card className="w-full h-full ">
        <CardContent className="flex flex-col h-full">
          <Tabs defaultValue="goals" className="flex-1  h-full w-full">
            <TabsList className="flex shrink-0 items-stretch h-64 p-0">
              <TabsTrigger className="flex-1 h-full border-none" value="goals">
                Goals
              </TabsTrigger>
              <TabsTrigger className="flex-1 h-full border-none" value="tasks">
                Tasks
              </TabsTrigger>
            </TabsList>
            <TabsContent className="h-full overflow-hidden" value="goals">
              <div className="pt-4">
                <GoalsSearch isGoals={true} />
              </div>

              <div className="h-full overflow-y-auto no-scr">
                <GoalsCard />
              </div>
            </TabsContent>
            <TabsContent className="h-full overflow-hidden" value="tasks">
              <div className="pt-4">
                <GoalsSearch isGoals={false} />
              </div>

              <div className="h-full overflow-y-auto no-scr">
                <TasksCard />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoalsPage;
