import React from "react";
import Helper from "../api/Helper";
import SearchBar from "./SearchBar";
import GistsList from "./GistsList";
class App extends React.Component {
  state = { gists: [] };

  handleSearchBar = async (username) => {
    try {
      const respone = await Helper.get(`/users/${username}/gists`);
    
      this.setState({ gists: respone.data });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="container">
        <SearchBar onSubmit={this.handleSearchBar} />
        <GistsList gists={this.state.gists} />
      </div>
    );
  }
}

export default App;
