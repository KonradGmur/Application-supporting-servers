import React from "react";
import "./Servers.css";
import { Button, Dropdown } from "react-bootstrap";

const Servers = (props) => (
  <ul>
    <li>
      <span className="status2">{props.name}</span>
      <span className="status"> {props.status}</span>
      <span className="status3"></span>
      <Button>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            ...
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item className="buttom">Turn off</Dropdown.Item>
            <Dropdown.Item>Reboot</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Button>
    </li>
  </ul>
);

export default Servers;
