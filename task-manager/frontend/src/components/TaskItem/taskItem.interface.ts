export interface TaskItemProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  priority: "low" | "medium" | "high";
}
