import React from "react";

const PriorityField: React.FC = () => {
  const PRIORITIES = ["Low", "Medium", "High"];
  return (
    <fieldset>
      <legend>Priority</legend>

      {PRIORITIES.map((priority, index) => (
        <div key={index}>
          <input
            type="radio"
            id={priority.toLowerCase()}
            name="priority"
            value={priority.toLowerCase()}
          />
          <label htmlFor={priority.toLowerCase()}>{priority}</label>
        </div>
      ))}
    </fieldset>
  );
};

export default PriorityField;
