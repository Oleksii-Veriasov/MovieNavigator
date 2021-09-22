import clsx from "clsx";
import { Route, Switch } from "react-router-dom";
import React from "react";
import { useStyles } from "./stylesMain";
import { Movies } from "../components/GetMovies/GetMovies";
import Search from "../components/SearchComponent/Search";
import TopNewMoviesPage from "./TopNewMoviesPage";
import MovieDetailsPage from "./MovieDetailsPage";
import MovieSearchPage from "./SearchPage"

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ open }) {
  const classes = useStyles();

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      <div className={classes.drawerHeader} />

      <Switch>
        <Route path="/details/:movieId">
        {/* <Route path="/details/:588228"> */}
          <MovieDetailsPage />
        </Route>
        <Route path="/about">
          <span>About</span>
        </Route>
        <Route path="/search">
          <MovieSearchPage />
        </Route>
        <Route path="/">
          <TopNewMoviesPage />
        </Route>
      </Switch>
    </main>
  );
}
