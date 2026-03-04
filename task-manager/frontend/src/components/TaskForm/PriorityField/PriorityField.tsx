import React from "react";

import type { PriorityFieldProps } from "./priorityField.interface";

import { PRIORITIES } from "../../../consts/consts";

const PriorityField: React.FC<PriorityFieldProps> = ({ priority }) => {
  return (
    <fieldset>
      <legend>Priority</legend>

      {PRIORITIES.map((prior, index) => (
        <div key={index}>
          <input
            type="radio"
            id={prior.toLowerCase()}
            name="priority"
            checked={priority.value === prior.toLowerCase()}
            onChange={priority.onChange}
            value={prior.toLowerCase()}
          />
          <label htmlFor={prior.toLowerCase()}>{prior}</label>
        </div>
      ))}
    </fieldset>
  );
};

export default PriorityField;
