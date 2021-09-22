import React from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useLocation, Redirect } from "react-router-dom";
import MenuLinks from "./MenuLinks";
import { useStyles } from "./stylesMenu";
import MainPages from "../../pages/MainPages";
import SimpleModal from "../LoginModal/LoginModalComponent";

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const location = useLocation();
  const { pathname, search } = location;
  const query = new URLSearchParams(search);
  const openSearch = query.get("open") === "1";
  // console.log(query.toString());
  // console.log(query, query.get("open"));
  const [open, setOpen] = React.useState(openSearch);
  query.set("open", open ? "1" : "");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {open !== openSearch && (
        <Redirect to={{ pathname, search: query.toString() }} />
      )}
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Movie Navigator
          </Typography>
          <SimpleModal />
        </Toolbar>
      </AppBar>
      <MenuLinks handleDrawerClose={handleDrawerClose} open={open} />
      <MainPages open={open} />
    </div>
  );
}
