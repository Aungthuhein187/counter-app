import React, { Component } from 'react';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
            <span className="badge bg-secondary m-2">
              {this.props.totalCount}
            </span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
