//local comps imports
import TaskItem from "./TaskItem";
//types imports
import { tasksProp } from "@/types/goalsTypes";

export const dummyTasks: tasksProp[] = [
  {
    name: "Complete XP Methodology Slides",
    date: "2026-03-31",
    isDone: true,
  },
  {
    name: "Debug Prisma P2002 Error",
    date: "2026-03-30",
    isDone: false,
  },
  {
    name: "Update Kolesh Sidebar UI",
    date: "2026-03-31",
    isDone: false,
  },
  {
    name: "Submit E-commerce Requirements PDF",
    date: "2026-04-02",
    isDone: false,
  },
  {
    name: "Daily Caloric Goal (Dirty Bulk)",
    date: "2026-03-30",
    isDone: true,
  },
  {
    name: "Backup Linux Mint Config Files",
    date: "2026-04-05",
    isDone: false,
  },
  {
    name: "Review Gauss-Seidel Exercises",
    date: "2026-04-01",
    isDone: false,
  },
];
const TasksCard = () => {
  return (
    <div className="flex flex-col gap-4 py-4 ">
      <ul className="flex flex-col gap-2">
        {dummyTasks.map((task, i) => (
          <li key={`${task.date} - ${i}`}>
            <TaskItem tasksProp={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksCard;
