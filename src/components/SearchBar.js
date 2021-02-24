import React from "react";

class SearchBar extends React.Component {
  state = { username: "" };

  handleInput = (event) => {
    this.setState({ username: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.username);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Search Bar</label>
            <input
              type="text"
              className="form-control"
              id="term"
              aria-describedby="emailHelp"
              placeholder="Enter a username for fetching public gists"
              value={this.state.username}
              onChange={this.handleInput}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
