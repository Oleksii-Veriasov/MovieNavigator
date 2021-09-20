import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { MoviesList } from "../MoviesList/MoviesList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

// const Button = ({ search }) => <button onClick={addTodo}>add</button>;

// const Input = ({ value, changeValue }) => {
//     const handleChange = (event) => {
//       changeValue(event.target.value);
//     };
//     return <input type="text" onChange={handleChange} value={value}/>;
// //   };
// const handleChange = (event) => {
//     changeValue(event.target.value);
//   };
// onChange={handleChange}

export default function Search() {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearchSubmit = (event, query) => {
    event.preventDefault();
    return getMoviesSearchRequest(query)
  }

  const getMoviesSearchRequest = async (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=9f963703358bbbdd8be7404104efc768&language=en-US&query=${query}&page=1`;
    console.log(url);
    //   const url = `/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false&840`;
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
    getMoviesSearchRequest();
  }, []);

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => handleSearchSubmit(e, query)}>
        <TextField
          id="standard-basic"
          label="Search movie by name"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {/* <TextField id="standard-basic" label="Search movie by cast" /> */}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          
        >
          Search
        </Button>
      </form>
      <div className="row">
        <MoviesList movies={movies} />
      </div>
    </>
  );
}
