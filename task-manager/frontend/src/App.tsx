import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TaskForm from "./components/TaskForm/TaskForm";

import "./styles/app.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TaskForm />
  </StrictMode>,
);
