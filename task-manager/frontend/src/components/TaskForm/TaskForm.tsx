import React from "react";

import PriorityField from "./PriorityField/PriorityField";

const TaskForm: React.FC = () => {
  return (
    <form>
      <label htmlFor="title">Title</label>
      <br />
      <input type="text" id="title" placeholder="title" />
      <br />
      <PriorityField />
      <label htmlFor="description">Description</label>
      <br />
      <textarea id="description" placeholder="description"></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default TaskForm;
