import React from "react";

import PriorityField from "./PriorityField/PriorityField";

import { URL } from "../../consts/consts";

import "../../styles/taskForm.css";
import type { TaskFormProps } from "../../types/types";

const TaskForm: React.FC<TaskFormProps> = ({
  taskData: { title, description, priority },
  editTask,
  taskId,
}) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const createdAt = `${day}-${month}-${year}`;

  const handleSubmit = () => {
    let titleValue = title.value;
    let descriptionValue = description.value;
    let priorityValue = priority.value;

    const postData = async () => {
      try {
        const response = await fetch(`${URL}${editTask ? `/${taskId}` : ""}`, {
          method: editTask ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: titleValue,
            description: descriptionValue,
            priority: priorityValue,
            createdAt,
            completed: false,
          }),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        titleValue = "";
        descriptionValue = "";
        priorityValue = "";
      } catch (err) {
        console.error(err);
      }
    };

    postData();
  };

  return (
    <div className="form-container">
      <form className="task-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Create New Task</h2>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="form-input"
            value={title.value}
            onChange={title.onChange}
            placeholder="What needs to be done?"
            required
          />
        </div>
        <PriorityField priority={priority} />
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className="form-textarea"
            placeholder="Add some details..."
            value={description.value}
            onChange={description.onChange}
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          {editTask ? "Update Task" : " Create Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
