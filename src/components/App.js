import React, { Component } from "react";
import "./App.css";
import Servers from "./Servers";

const API = "http://localhost:4454/servers";
class App extends Component {
  state = {
    servers: [],
  };

  componentDidMount() {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          servers: data,
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
    return [].filter((server) =>
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
        <input onInput={this.filterServers.bind(this)} placeholder="Search" />
        <ServerList servers={this.state.servers} />
      </div>
    );
  }
}

const ServerList = ({ servers }) => {
  if (servers.length > 0) {
    return (
      <>
        <div className="header"> Name Status</div>
        <ul>
          {servers.map((server) => (
            <Servers
              key={server.id}
              name={server.name}
              status={server.status}
            />
          ))}
        </ul>
      </>
    );
  }
  return <p>No results!</p>;
};

export default App;
