import React from "react";

import TaskForm from "../TaskForm/TaskForm";
import TaskItem from "../TaskItem/TaskItem";

const TaskContainer: React.FC = () => {
  return (
    <>
      <TaskForm />
      <TaskItem />
    </>
  );
};

export default TaskContainer;
