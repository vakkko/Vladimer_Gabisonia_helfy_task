import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TaskForm from "./components/TaskForm/TaskForm";

import "./styles/app.css";
import TaskItem from "./components/TaskItem/TaskItem";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TaskForm />
    <TaskItem />
  </StrictMode>,
);
