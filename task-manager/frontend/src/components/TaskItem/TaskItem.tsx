import React, { useEffect, useState, useCallback } from "react";
import { URL } from "../../consts/consts";
import type { TaskItemProps } from "./taskItem.interface";
import "../../styles/taskItem.css";
import DeleteModal from "./DeleteModal/DeleteModal";

const TaskCarousel: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItemProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [taskToDelete, setTaskToDelete] = useState<boolean>(false);
  const [deleteTaskId, setDeleteTaskId] = useState<number>();

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(URL);
      if (!response.ok) throw new Error("Failed to fetch tasks");
      const data = await response.json();
      setTasks(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const toggleComplete = async (id: string, task: TaskItemProps) => {
    try {
      const response = await fetch(`${URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify({ ...task, completed: !task.completed }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        fetchData();
      } else {
        throw new Error("Unable to change status");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id: number) => {
    try {
      const response = await fetch(`${URL}/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchData();
      } else {
        throw new Error("Unable to delete task");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteClick = (id: number) => {
    setTaskToDelete(true);
    setDeleteTaskId(id);
  };

  if (loading && tasks.length === 0) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {taskToDelete && (
        <DeleteModal
          setTaskToDelete={setTaskToDelete}
          deleteTaskId={deleteTaskId}
          deleteTask={deleteTask}
        />
      )}
      <div className="carousel-viewport">
        <div className="carousel-track">
          {tasks.map((task) => (
            <div className="task-card" key={task.id}>
              <div className="task-header">
                <h3>{task.title}</h3>
                <span className="date">{task.createdAt}</span>
                <div className="actions">
                  <button onClick={() => handleDeleteClick(task.id)}>
                    <img src="/images/delete-icon.png" alt="delete" />
                  </button>
                  <button>
                    <img src="/images/edit-icon.png" alt="edit icon" />
                  </button>
                </div>
              </div>
              <p className="description">{task.description}</p>
              <div className="task-footer">
                <span
                  className={`priority-badge ${task.priority.toLowerCase()}`}
                >
                  {task.priority}
                </span>
                <button
                  onClick={() => toggleComplete(String(task.id), task)}
                  className={`status-tag ${task.completed ? "done" : "pending"}`}
                >
                  {task.completed ? "Completed" : "Not-Completed"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskCarousel;
