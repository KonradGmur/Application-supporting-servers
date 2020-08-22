import React from "react";
import "./Servers.css";

const Servers = (props) => (
  <ul>
    <li>
      <strong>{props.name} </strong>
      <strong>{props.status}</strong>
    </li>
  </ul>
);

export default Servers;
