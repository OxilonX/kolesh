import DashboardMainInfo from "@/components/local_components/dashboard/DashboardMainInfo";
import DashboardSecondaryInfos from "@/components/local_components/dashboard/DashboardSecondaryInfos";
import DashboardTasks from "@/components/local_components/dashboard/DashboardTasks";
const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 h-full ">
      <div className="grid grid-cols-[1fr_300px] gap-6">
        <DashboardMainInfo />
        <DashboardSecondaryInfos />
      </div>
      <div className="  grid grid-cols-[1fr_300px] gap-6 ">
        <div className="grid grid-cols-2  gap-4">
          <DashboardTasks
            dummyTasks={[
              {
                id: 1,
                task: "run 10 km Lorem ipsum dolor sit amet.",
                date: "25/aug/2026",
                isChecked: false,
              },
            ]}
          />
          <DashboardTasks dummyTasks={[]} />
        </div>
        <div>
          <div className="w-full h-full bg-red-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
