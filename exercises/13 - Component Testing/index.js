import React from "react";

export default ({ data, onClick }) => {
  // Implement this component to pass the tests in ./__tests/index.spec.js
  return (
    <ul>
      {data.map((item) => (
        <li
          className={item.selected ? "selected" : ""}
          onClick={() => onClick(item.key)}
          key={item.key}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};
