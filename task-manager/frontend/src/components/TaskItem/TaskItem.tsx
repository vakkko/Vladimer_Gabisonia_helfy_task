import React, { useEffect, useState } from "react";

import { URL } from "../../consts/consts";

import type { TaskItemProps } from "./taskItem.interface";
import "../../styles/taskItem.css";

const TaskCarousel: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItemProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
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
    };
    fetchData();
  }, []);

  const toggleComplete = async (id: string, task: TaskItemProps) => {
    try {
      const response = await fetch(`${URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          ...task,
          completed: !task.completed,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Unable to change status");
      }
      setTasks((prev) =>
        prev.map((t) =>
          t.id === Number(id) ? { ...t, completed: !t.completed } : t,
        ),
      );
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (tasks.length === 0) return null;

  const TripleTasks = [...tasks, ...tasks, ...tasks];

  return (
    <div className="carousel-viewport">
      <div className="carousel-track">
        {TripleTasks.map((task, index) => (
          <div className="task-card" key={`${task.id}-${index}`}>
            <div className="task-header">
              <h3>{task.title}</h3>
              <span className="date">{task.createdAt}</span>
              <div className="actions">
                <button className="icon-btn">
                  <img src="./images/delete-icon.png" alt="delete" />
                </button>
              </div>
            </div>
            <p className="description">{task.description}</p>
            <button
              onClick={() => toggleComplete(String(task.id), task)}
              className={`status-tag ${task.completed ? "done" : "pending"}`}
            >
              {task.completed ? "Completed" : "Not-Completed"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskCarousel;
