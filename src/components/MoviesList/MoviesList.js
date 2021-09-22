import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { MoviesItem } from "../MoviesItem/MoviesItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "left",
//     color: theme.palette.text.secondary,
//   },
}));

export const MoviesList = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {console.log(props)}
        {props.movies.map((movie, index) => (
          <Grid item xs={12} sm={4} key = {movie.id}>
            {/* <Paper className={classes.paper}> */}
              <MoviesItem movie={movie} />
              {console.log(movie)}
            {/* </Paper> */}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
