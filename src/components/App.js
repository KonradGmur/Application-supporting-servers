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
    fetch("http://localhost:4454/servers")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          servers: data,
          isLoaded: true,
        });
      })
      .catch((err) => console.log(`Something went wrong ${err}`));
  };

  render() {
    const servers = this.state.servers.map((server) => (
      <Servers key={server.id} name={server.name} status={server.status} />
    ));
    return <ul>{this.state.isLoaded ? servers : "Loading..."}</ul>;
  }
}

export default App;
