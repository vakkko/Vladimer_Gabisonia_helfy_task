import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import TaskContainer from "./components/TaskContainer/TaskContainer";

import "./styles/app.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TaskContainer />
  </StrictMode>,
);
