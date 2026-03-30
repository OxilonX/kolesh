//local comps imports
import GoalsItem from "./GoalsItem";
//types imports
import { goalsItemProps } from "@/types/goalsTypes";
export const dummyGoals: goalsItemProps[] = [
  {
    name: "Weight Gain (Dirty Bulk)",
    value: 65,
    startDate: "2026-03-01",
    endDate: "2026-06-01",
    taskNumber: 12,
  },
  {
    name: "Kolesh Chat Logic",
    value: 90,
    startDate: "2026-03-15",
    endDate: "2026-03-30",
    taskNumber: 8,
  },
  {
    name: "E-commerce University Proj",
    value: 40,
    startDate: "2026-02-10",
    endDate: "2026-05-20",
    taskNumber: 25,
  },
  {
    name: "Extreme Programming Report",
    value: 100,
    startDate: "2026-03-01",
    endDate: "2026-03-15",
    taskNumber: 5,
  },
];

const GoalsCard = () => {
  return (
    <div className="flex flex-col gap-4 py-4 ">
      <ul className="flex flex-col gap-2">
        {dummyGoals.map((goal, i) => (
          <li key={`${goal.startDate} - ${i}`}>
            <GoalsItem goalsProp={goal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalsCard;
