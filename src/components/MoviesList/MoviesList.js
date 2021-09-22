import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { MoviesItem } from "../MoviesItem/MoviesItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export const MoviesList = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {console.log("LIst props " + props)}
        {props.movies.map((movie, index) => (
          <Grid item xs={12} sm={4} key={movie.id}>
            <MoviesItem movie={movie} />
            {console.log("List movie: " + movie)}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
