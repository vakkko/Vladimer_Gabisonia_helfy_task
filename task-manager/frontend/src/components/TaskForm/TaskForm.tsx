import React from "react";

import PriorityField from "./PriorityField/PriorityField";

import useHandleChange from "../../hooks/useHandleChange";

const TaskForm: React.FC = () => {
  const title = useHandleChange();
  const description = useHandleChange();
  const priority = useHandleChange();

  return (
    <form>
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
