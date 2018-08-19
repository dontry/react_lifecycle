import React from "react";
export default ({ value, options, onChange }) => (
  <select onChange={onChange}>
    {options.map(item => <option checked={item === value}>{item}</option>)}
  </select>
);
