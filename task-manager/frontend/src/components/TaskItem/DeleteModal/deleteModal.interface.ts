import type { Dispatch, SetStateAction } from "react";

export interface DeleteModalInterface {
  setTaskToDelete: Dispatch<SetStateAction<boolean>>;
  deleteTaskId: number | undefined;
  deleteTask: (id: number) => Promise<void>;
}
