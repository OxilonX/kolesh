export interface goalsItemProps {
  name: string;
  startDate: string;
  endDate: string;
}
export interface tasksProp {
  id: string;
  name: string;
  createdAt: string;
  isDone: boolean;
}
export interface tasksType {
  id: string;
  name: string;
  createdAt: string;
  isDone: boolean;
}
export interface goalType {
  id: string;
  name: string;
  createdAt: string;
  progress: number | 0;
}
export interface categoryType {
  name: string;
}
export type Priority = "GOATED" | "MAJOR" | "VIBING" | "CASUAL" | "TRASH";
