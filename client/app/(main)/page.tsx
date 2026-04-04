import DashboardMainInfo from "@/components/local_components/dashboard/DashboardMainInfo";
import DashboardSecondaryInfos from "@/components/local_components/dashboard/DashboardSecondaryInfos";
import DashboardTasks from "@/components/local_components/dashboard/DashboardTasks";
import DashboardGoals from "@/components/local_components/dashboard/DashboardGoals";
import DashboardCalendar from "@/components/local_components/dashboard/DashboardCalendar";
const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[1fr_auto] h-full w-full gap-4 p-4 box-border overflow-y-auto">
      <div className="grid grid-cols-[1fr_316px] gap-6 shrink-0 ">
        <DashboardMainInfo />
        <DashboardSecondaryInfos />
      </div>
      <div className="flex-1 min-h-0 grid grid-cols-[1fr_300px] gap-6 overflow-y-auto">
        <div className="flex  gap-6  min-h-0 overflow-hidden w-full">
          <div className="flex-1 min-h-0 overflow-hidden w-full">
            <DashboardTasks
              dummyTasks={[
                {
                  id: 1,
                  task: "run 10 km Lorem ipsum dolor sit amet.",
                  date: "25/aug/2026",
                  isChecked: false,
                },

                {
                  id: 2,
                  task: "run 10 km Lorem ipsum dolor sit amet.",
                  date: "25/aug/2026",
                  isChecked: true,
                },
              ]}
            />
          </div>
          <div className="flex-1 min-h-0 overflow-hidden w-full">
            <DashboardGoals
              dummyGoals={[
                {
                  id: 1,
                  name: "Be major of promo",
                  tasksCount: 4,
                  progress: 50,
                },
                {
                  id: 2,
                  name: "Read 20 books more then u did",
                  tasksCount: 12,
                  progress: 80,
                },
                {
                  id: 3,
                  name: "Get better any sports and gain 50kg weight",
                  tasksCount: 15,
                  progress: 0,
                },
                {
                  id: 4,
                  name: "Have fun and lower kortisol in your body",
                  tasksCount: 10,
                  progress: 10,
                },
              ]}
            />
          </div>
        </div>
        <div className="flex flex-1 min-h-0   ">
          <DashboardCalendar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
