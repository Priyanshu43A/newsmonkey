import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import News from "./News"; // Import the News component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={<News key="general" category="general" />}
            />
            <Route
              path="/sports"
              element={<News key="sports" category="sports" />}
            />
            <Route
              path="/politics"
              element={<News key="politics" category="politics" />}
            />
            <Route
              path="/entertainment"
              element={<News key="entertainment" category="entertainment" />}
            />
            <Route
              path="/business"
              element={<News key="business" category="business" />}
            />
            <Route
              path="/world"
              element={<News key="world" category="world" />}
            />
            <Route
              path="/health"
              element={<News key="health" category="health" />}
            />
            <Route
              path="/science"
              element={<News key="science" category="science" />}
            />
            <Route
              path="/technology"
              element={<News key="technology" category="technology" />}
            />
            <Route
              path="*"
              element={<News key="general" category="general" />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
