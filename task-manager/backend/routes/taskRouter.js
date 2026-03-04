import express from "express";

import { taskValidate } from "../middleware/taskValidate";

const router = express.Router();

let tasks = [];
const taskErrMessage = "Task was not found";

router.get("/", (req, res) => {
  res.status(200).json(tasks);
});

router.post("/", taskValidate, (req, res) => {
  const newTask = { id: Date.now(), ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

router.put("/:id", taskValidate, (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((task) => task.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ message: taskErrMessage });
  }

  tasks[index] = { ...tasks[index], ...req.body };
  res.json(tasks[index]);
});

router.patch("/:id/toggle", (req, res) => {
  const { id } = req.params;
  const task = tasks.find((task) => task.id === Number(id));

  if (!task) {
    return res.status(404).json({ message: taskErrMessage });
  }

  task.completed = !task.completed;
  res.json(task);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const initialLength = tasks.length;
  tasks = tasks.filter((task) => task.id !== Number(id));

  if (tasks.length === initialLength) {
    return res.status(404).json({ message: taskErrMessage });
  }

  res.sendStatus(204);
});
