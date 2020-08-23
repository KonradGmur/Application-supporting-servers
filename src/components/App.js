import React, { Component } from "react";
import "./App.css";
import Servers from "./Servers";

const API = "http://localhost:4454/servers/id";
class App extends Component {
  state = {
    servers: [],
  };

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", API, true);
    xhr.onload = () => {
      console.log(xhr.status);
      if (xhr.status === 200) {
        const servers = JSON.parse(xhr.response);
        console.log(servers);
        this.setState({
          servers,
        });
      }
      console.log(typeof xhr.response);
    };

    xhr.send(null);

    // fetch(API)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.setState({
    //       servers: data,
    //     });
    //   })
    //   .catch((err) => console.log(`Something went wrong ${err}`));
  }

  filterServers(e) {
    const text = e.currentTarget.value;
    const servers = this.getFilteredServersForText(text);
    console.log(servers);
    console.log(text);
    this.setState({
      servers,
    });
  }

  getFilteredServersForText = (text) => {
    return [].filter((server) =>
      server.toLowerCase().includes(text.toLowerCase())
    );
  };

  render() {
    const servers = this.state.servers.map((server) => (
      <Servers key={server.id} name={server.name} status={server.status} />
    ));
    return (
      <div className="App">
        <h2>Servers</h2>
        <h4>Number of elements: {servers.length}</h4>
        <input onInput={this.filterServers.bind(this)} placeholder="Search" />
        {servers}
      </div>
    );
  }
}

export default App;
