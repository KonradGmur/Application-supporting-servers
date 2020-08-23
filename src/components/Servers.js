import React from "react";
import "./Servers.css";
import Button from "./button";

const Servers = (props) => (
  <ul>
    <li>
      <strong>{props.name} </strong>
      <strong>{props.status}</strong>
      <Button />
    </li>
  </ul>
);

export default Servers;
