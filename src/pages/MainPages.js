import clsx from "clsx";
import { Route, Switch } from "react-router-dom";
import React from "react";
import { useStyles } from "./stylesMain";
import { Movies } from "../components/GetMovies/GetMovies";
import Search from "../components/SearchComponent/Search";
import TopNewMoviesPage from "./TopNewMoviesPage";

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
        <Route path="/movie">
          <TopNewMoviesPage />
        </Route>
        <Route path="/about">
          <span>About</span>
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <TopNewMoviesPage />
        </Route>
      </Switch>
    </main>
  );
}
