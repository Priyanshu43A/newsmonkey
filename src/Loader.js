// Loader.js
import React from "react";
import "./Loader.css"; // Import the CSS file for styling

class Loader extends React.Component {
  render() {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }
}

export default Loader;
