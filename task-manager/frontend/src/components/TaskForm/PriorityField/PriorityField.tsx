import React from "react";

import type { PriorityFieldProps } from "./priorityField.interface";

import { PRIORITIES } from "../../../consts/consts";

const PriorityField: React.FC<PriorityFieldProps> = ({ priority }) => {
  return (
    <fieldset className="priority-fieldset">
      <legend>Priority Level</legend>
      <div className="priority-options">
        {PRIORITIES.map((prior, index) => {
          const lowerPrior = prior.toLowerCase();
          return (
            <div key={index} className="radio-group">
              <input
                type="radio"
                id={lowerPrior}
                name="priority"
                className="priority-radio"
                checked={priority.value === lowerPrior}
                onChange={priority.onChange}
                value={lowerPrior}
              />
              <label htmlFor={lowerPrior} className="priority-label">
                {prior}
              </label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
};

export default PriorityField;
