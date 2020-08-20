import React, { Component } from "react";
import "./App.css";
import Servers from "./Servers";

class App extends Component {
  state = {
    servers: [],
    isLoaded: false,
  };

  componentDidMount() {
    setTimeout(this.fetchData, 3000);
  }
  fetchData = () => {
    fetch("/api/servers.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          servers: data.servers,
          isLoaded: true,
        });
      });
  };

  render() {
    const servers = this.state.servers.map((server) => (
      <Servers key={server.id} name={server.name} status={server.status} />
    ));
    return <ul>{this.state.isLoaded ? servers : "Loading..."}</ul>;
  }
}

export default App;
