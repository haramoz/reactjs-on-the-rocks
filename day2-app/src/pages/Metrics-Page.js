import React, { useState } from "react";

const list = [
  { id: 1, text: "CPU" },
  { id: 2, text: "MEMORY" },
  { id: 3, text: "TCP DATA" },
  { id: 4, text: "BANDWIDTH" },
];

const listItems = list.map((item) => <li key={item.id}>{item.text}</li>);

const Metrics = () => {
  return (
      <div className="Metrics-page">
        <h1>Metrics Page</h1>
        <ul>{listItems}</ul>
      </div>
  );
};

export default Metrics;
