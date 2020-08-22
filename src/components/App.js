import React, { Component } from "react";
import "./App.css";
import Servers from "./Servers";

class App extends Component {
  state = {
    servers: [],
    isLoaded: false,
  };

  componentDidMount() {
    fetch("./servers.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          servers: data,
          isLoaded: true,
        });
      })
      .catch((err) => console.log(`Something went wrong ${err}`));
  }

  filterServers(e) {
    const text = e.currentTarget.value;
    const servers = this.getFilteredServersForText(text);
    this.setState({
      servers,
    });
  }

  getFilteredServersForText(text) {
    return servers.filter((server) =>
      server.toLowerCase().includes(text.toLowerCase())
    );
  }

  render() {
    const servers = this.state.servers.map((server) => (
      <Servers key={server.id} name={server.name} status={server.status} />
    ));
    return (
      <div className="App">
        <h2>Servers</h2>
        <h4>Number of elements: {servers.length}</h4>
        <h5> Number Status</h5>
        <input onInput={this.filterServers.bind(this)} placeholder="Search" />
        <ServerList servers={this.state.servers} />
      </div>
    );
  }
}

const ServerList = ({ servers }) => {
  if (servers.length > 0) {
    return (
      <ul>
        {servers.map((server) => (
          <Servers key={server.id} name={server.name} status={server.status} />
        ))}
      </ul>
    );
  }
  return <p>No results!</p>;
};

export default App;
