import React from "react";
import "./Servers.css";

const Servers = (props) => (
  <ul>
    <li>
      {props.name}
      <strong>{props.status}</strong>
      <button>...</button>
    </li>
  </ul>
);

export default Servers;
