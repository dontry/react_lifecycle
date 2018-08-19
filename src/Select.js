import React from "react";
export default ({ value = "null", options, onChange }) => {
  console.group("Render <Select />");
  console.log("value:", value);
  console.groupEnd();
  return (
    <select onChange={onChange}>
      <option key={"null"} selected={value === null} />
      {options.map(item => (
        <option key={item} selected={item === value}>
          {item}
        </option>
      ))}
    </select>
  );
};
