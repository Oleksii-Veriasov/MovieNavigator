import React, { useState, useEffect } from "react";
import { MoviesList } from "../MoviesList/MoviesList";

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  const getMoviesRequest = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=9f963703358bbbdd8be7404104efc768&language=en-US&page=1";
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);

    if (responseJson) {
      setMovies(responseJson.results);
      console.log(responseJson.results);
    }
  };
  // debugger;
  useEffect(() => {
    getMoviesRequest();
  }, []);

  return (
    <div className="row">
      <MoviesList movies={movies} />
    </div>
  );
};
