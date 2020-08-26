import React, { Component } from "react";
import "./App.css";
import Servers from "./Servers";
import "@trendmicro/react-buttons/dist/react-buttons.css";
import "@trendmicro/react-dropdown/dist/react-dropdown.css";

const API = "http://localhost:4454/servers";
class App extends Component {
  state = {
    servers: [],
    // value: "",
  };

  componentDidMount() {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        const allServers = data;
        this.setState({
          servers: data,
        });
      })
      .catch((err) => console.log(`Something went wrong ${err}`));
  }

  filterServers(e) {
    const text = e.currentTarget.value;
    const servers = this.getFilteredUsersForText(text);
    this.setState({
      servers,
    });
  }

  // getFilteredUsersForText(text, allServers) {
  //   return allServers.filter((server) =>
  //     server.toLowerCase().includes(text.toLowerCase())
  //   );
  // }

  render() {
    const servers = this.state.servers.map((server) => (
      <Servers key={server.id} name={server.name} status={server.status} />
    ));
    return (
      <div className="App">
        <h2>Servers</h2>
        <h3>Number of elements: {servers.length}</h3>
        <input
          onInput={this.filterServers.bind(this)}
          placeholder="Search"
          className="Search"
        />
        <h4 className="header">NAME STATUS</h4>
        {servers}
        {/* <ServerList users={this.state.filteredUsers} /> */}
      </div>
    );
  }
}

// const ServerList = ({ servers }) => {
//   if (servers.length > 0) {
//     return (
//       <ul>
//         {servers.map((server) => (
//           <li key={server.id}>{servers}</li>
//         ))}
//       </ul>
//     );
//   }

//   return <p>No results!</p>;
// };

export default App;
