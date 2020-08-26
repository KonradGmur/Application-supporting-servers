import React from "react";
import "./Servers.css";
import { MenuItem, DropdownButton } from "@trendmicro/react-dropdown";

const Servers = (props) => (
  <ul>
    <li>
      <span className="status2">{props.name}</span>
      <span className="status"> {props.status}</span>
      <span className="status3"></span>
      <DropdownButton
        className="button"
        btnSize="xs"
        title="..."
        onSelect={(eventKey) => {}}
      >
        <MenuItem eventKey={1}>Turn off</MenuItem>
        <MenuItem eventKey={2}>Reboot</MenuItem>
      </DropdownButton>
    </li>
  </ul>
);

export default Servers;
