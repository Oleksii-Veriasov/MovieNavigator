import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/MenuComponent/Menu";

function App() {
  return (
    <Router>
      <Menu />
    </Router>
  );
}

export default App;
