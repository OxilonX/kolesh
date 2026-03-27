import DashboardMainInfo from "@/components/local_components/dashboard/DashboardMainInfo";
import DashboardSecondaryInfos from "@/components/local_components/dashboard/DashboardSecondaryInfos";
import DashboardTasks from "@/components/local_components/dashboard/DashboardTasks";
const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[1fr_auto] h-full w-full gap-4 p-4 box-border overflow-y-auto">
      <div className="grid grid-cols-[1fr_300px] gap-6 shrink-0">
        <DashboardMainInfo />
        <DashboardSecondaryInfos />
      </div>
      <div className="flex-1 min-h-0 grid grid-cols-[1fr_300px]   gap-6 overflow-y-auto">
        <div className="flex gap-4 min-h-0 overflow-hidden">
          <div className="flex-1 min-h-0 overflow-hidden">
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
                  isChecked: false,
                },
                {
                  id: 2,
                  task: "run 10 km Lorem ipsum dolor sit amet.",
                  date: "25/aug/2026",
                  isChecked: true,
                },
                {
                  id: 2,
                  task: "run 10 km Lorem ipsum dolor sit amet.",
                  date: "25/aug/2026",
                  isChecked: true,
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
          <div className="flex-1 min-h-0 overflow-hidden">
            <DashboardTasks dummyTasks={[]} />
          </div>
        </div>
        <div className="w-[300px] h-full shrink-0"></div>
      </div>
    </div>
  );
};

export default Dashboard;
