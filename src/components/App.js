import React, { Component } from "react";
import "./App.css";
import Servers from "./Servers";

class App extends Component {
  state = {
    servers: [],
  };

  componentDidMount() {
    fetch("/api/src/servers.json")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          servers: result.servers,
        });
      });
  }

  render() {
    const servers = this.state.servers.map((server) => (
      <Servers key={server.id} name={server.name} status={server.status} />
    ));
    return <ul>{servers}</ul>;
  }
}

export default App;
