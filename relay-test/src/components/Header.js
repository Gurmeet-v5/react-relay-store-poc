import React, { Component } from "react";
import "../assets/App.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <h2>React with Relay Store POC</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/create"} className="nav-link">
                Create Post
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
      </div>
    );
  }
}

export default Header;
