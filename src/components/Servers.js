import React from "react";
import "./Servers.css";
import { MenuItem, DropdownButton } from "@trendmicro/react-dropdown";

const Servers = (props) => (
  <ul>
    <li>
      <span className="status2">{props.name}</span>
      <span className="status">&bull; {props.status}</span>
      <span className="status3"></span>
      <DropdownButton
        btnSize="xs"
        btnStyle="link"
        title="..."
        onSelect={(eventKey) => {}}
      >
        {/* <MenuItem eventKey={1}>Turn off</MenuItem> */}
        {/* <MenuItem eventKey={2}>Reboot</MenuItem> */}
      </DropdownButton>
    </li>
  </ul>
);

export default Servers;
