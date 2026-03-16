import React from "react";

import TaskForm from "../TaskForm/TaskForm";
import TaskItem from "../TaskItem/TaskItem";

import useHandleChange from "../../hooks/useHandleChange";

const TaskContainer: React.FC = () => {
  const title = useHandleChange();
  const description = useHandleChange();
  const priority = useHandleChange();

  return (
    <>
      <TaskForm taskData={{ title, description, priority }} />
      <TaskItem taskData={{ title, description, priority }} />
    </>
  );
};

export default TaskContainer;
