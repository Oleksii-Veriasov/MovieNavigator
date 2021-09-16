import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/MenuComponent/Menu";
// const TMDBLogo = "./images/tmdb.svg";

function App() {
  return (
    <Router>
      <Menu />
    </Router>
  );
}

export default App;
