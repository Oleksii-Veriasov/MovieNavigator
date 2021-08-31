import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Movies } from './components/GetMovies/GetMovies';
const TMDBLogo = "./images/tmdb.svg";



function App() {
  return (
  <>
    <header>Header
      <img src={TMDBLogo} alt='logo TMDB'></img>
    </header>
    <aside>Aside filters</aside>
    <Movies/>
    <footer>Info</footer>
  </>
  );
}

export default App;