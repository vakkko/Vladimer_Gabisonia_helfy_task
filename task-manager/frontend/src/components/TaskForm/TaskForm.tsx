import React from "react";

import PriorityField from "./PriorityField/PriorityField";

import useHandleChange from "../../hooks/useHandleChange";

const TaskForm: React.FC = () => {
  const title = useHandleChange();
  const description = useHandleChange();
  const priority = useHandleChange();

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const createdAt = `${year}-${month}-${day}`;

  const URL = "http://localhost:4000/api/tasks";

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    let titleValue = title.value;
    let descriptionValue = description.value;
    let priorityValue = priority.value;

    const postData = async () => {
      try {
        const response = await fetch(URL, {
          method: "POST",
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <br />
      <input
        type="text"
        id="title"
        value={title.value}
        onChange={title.onChange}
        placeholder="title"
      />
      <br />
      <PriorityField priority={priority} />
      <label htmlFor="description">Description</label>
      <br />
      <textarea
        id="description"
        placeholder="description"
        value={description.value}
        onChange={description.onChange}
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default TaskForm;
