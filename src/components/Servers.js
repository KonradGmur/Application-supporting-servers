import React from "react";
import "./Servers.css";

const Servers = (props) => (
  <li>
    Name: <strong>{props.name} </strong>
    Status: <strong>{props.status}</strong>
  </li>
);

export default Servers;
