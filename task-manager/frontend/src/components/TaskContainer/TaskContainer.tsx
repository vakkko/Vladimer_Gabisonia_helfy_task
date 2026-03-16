import React, { useState } from "react";

import TaskForm from "../TaskForm/TaskForm";
import TaskItem from "../TaskItem/TaskItem";

import useHandleChange from "../../hooks/useHandleChange";

const TaskContainer: React.FC = () => {
  const title = useHandleChange();
  const description = useHandleChange();
  const priority = useHandleChange();
  const [editTask, setEditTask] = useState<boolean>(false);
  const [taskId, setTaskId] = useState<number>();

  return (
    <>
      <TaskForm
        taskData={{ title, description, priority }}
        editTask={editTask}
        taskId={taskId}
      />
      <TaskItem
        taskData={{ title, description, priority }}
        setEditTask={setEditTask}
        setTaskId={setTaskId}
      />
    </>
  );
};

export default TaskContainer;
