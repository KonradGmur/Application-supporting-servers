import React, { Component } from "react";
import "./App.css";
import Servers from "./Servers";

class App extends Component {
  state = {
    servers: [],
  };

  componentDidMount() {
    fetch("/api/servers.json")
      .then((response) => response.json())

      .then((data) => {
        this.setState({
          servers: data.servers,
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
