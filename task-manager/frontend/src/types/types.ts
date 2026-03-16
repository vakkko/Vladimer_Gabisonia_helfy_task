interface handleChangeInterface {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface TaskDatalInterface {
  taskData: {
    title: handleChangeInterface;
    priority: handleChangeInterface;
    description: handleChangeInterface;
  };
}

export interface TaskItemProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  priority: "low" | "medium" | "high";
}
