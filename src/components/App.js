import React, { Component } from "react";
import "./App.css";
import Servers from "./Servers";
import "@trendmicro/react-buttons/dist/react-buttons.css";
import "@trendmicro/react-dropdown/dist/react-dropdown.css";

const API = "http://localhost:4454/servers";

// function searchingFor(term) {
//   return function (x) {
//     return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
//   };
// }
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servers: [],
      term: "",
    };

    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler = (e) => {
    this.setState({ term: e.target.value });
  };

  componentDidMount() {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          servers: data,
        });
        const allServers = this.state.servers;
        console.log(allServers);
      })
      .catch((err) => console.log(`Something went wrong ${err}`));
  }

  changeStatusServer = () => {
    fetch(`http://localhost:4454/servers/${this.props.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: {},
    });
  };

  render() {
    const allServers = this.state.servers
      // .filter(searchingFor(this.state.term))
      .map((server) => (
        <Servers key={server.id} name={server.name} status={server.status} />
      ));
    return (
      <div className="App">
        <h2>Servers</h2>
        <h3>Number of elements: {allServers.length}</h3>
        <form>
          <input
            className="Search"
            placeholder="Search"
            onChange={this.searchHandler}
            onClick={this.changeStatusServer}
            value={this.state.term}
          />
        </form>
        <h4 className="header">NAME STATUS</h4>
        {allServers}
      </div>
    );
  }
}

export default App;
