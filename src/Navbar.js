// Navbar.js
import React from "react";
import "./Navvbar.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">NewsMonkey🙊</div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link to="/technology">Technology</Link>
            </li>
            <li className="nav-item">
              <Link to="/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link to="/science">Science</Link>
            </li>
            <li className="nav-item">
              <Link to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link to="/business">Business</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
