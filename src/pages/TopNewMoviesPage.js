import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getMovies } from "../actions/moviesActions";
import { MoviesList } from "../components/MoviesList/MoviesList";

const TopNewMovies = ({
  movies,
  getMovies,
  isLoading,
  isError,
  errorMessage,
}) => {
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {isError && <div>{errorMessage}</div>}
      {isLoading ? (
        <div>"Request in process..."</div>
      ) : (
        <MoviesList movies={movies} />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isError: state.movieListReducer.isError,
    isLoading: state.movieListReducer.isLoading,
    movies: state.movieListReducer.movies,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getMovies: (...params) => dispatch(getMovies(...params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNewMovies);
