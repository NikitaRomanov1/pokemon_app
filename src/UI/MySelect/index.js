import React from "react";
import { SelectStyle } from "../../styles/styles";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <SelectStyle
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option, index) => (
        <option key={index + 1} value={option.value}>
          {option.name}
        </option>
      ))}
    </SelectStyle>
  );
};
export default MySelect;
