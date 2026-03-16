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

export interface TaskFormProps extends TaskDatalInterface {
  editTask: boolean;
  taskId: number | undefined;
}

export interface TaskItemInterface extends TaskDatalInterface {
  setEditTask: React.Dispatch<React.SetStateAction<boolean>>;
  setTaskId: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export interface TaskItemProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  priority: "low" | "medium" | "high";
}
