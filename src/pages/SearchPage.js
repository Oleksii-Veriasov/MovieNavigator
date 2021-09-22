import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { MoviesList } from "../components/MoviesList/MoviesList";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { getMoviesSearchRequest } from "../actions/moviesActions";
import Loader from "../components/Helpers/Loader";
debugger;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const MovieSearchPage = ({
  getMoviesSearchRequest,
  submittedQuery,
  movies,
  isError,
  isLoading,
  errorMessage,
}) => {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const location = useLocation();
  const history = useHistory();

  //   const handleSearchSubmit = (event, query) => {
  //     event.preventDefault();
  //     if (query !== "") {
  //       getMoviesSearchRequest(query);
  //       return history.push(`/search/${query}`);
  //     }
  //   };
  const handleSearchSubmit = (event, query) => {
    event.preventDefault();
    getMoviesSearchRequest(query);
    return history.push(`/search/${query}`);
  };

  useEffect(() => {
    if (submittedQuery && location.pathname === "/search") {
      setQuery(submittedQuery);
    }
  }, [submittedQuery, location]);

  return (
    <>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={(e) => handleSearchSubmit(e, query)}
      >
        <TextField
          id="standard-basic"
          label="Search movie by name"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {console.log("query: " + query)}
        {/* <TextField id="standard-basic" label="Search movie by cast" /> */}
        <Button variant="contained" color="primary" type="submit">
          Search
        </Button>
      </form>
      {isError && <div>{errorMessage}</div>}
      {isLoading ? <Loader /> : <MoviesList movies={movies} />}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("state: " + state.movieSearchReducer.submittedQuery);
  return {
    submit: state.movieSearchReducer.submit,
    submittedQuery: state.movieSearchReducer.submittedQuery,
    query: state.movieSearchReducer.query,
    movies: state.movieSearchReducer.movies,
    isError: state.movieSearchReducer.isError,
    isLoading: state.movieSearchReducer.isLoading,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getMoviesSearchRequest: (query) => dispatch(getMoviesSearchRequest(query)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearchPage);
