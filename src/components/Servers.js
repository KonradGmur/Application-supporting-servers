import React from "react";
import "./Servers.css";

const Servers = (props) => (
  <ul>
    <li>
      {`${props.name} ${props.status}`}
      <button>...</button>
    </li>
  </ul>
);

export default Servers;
