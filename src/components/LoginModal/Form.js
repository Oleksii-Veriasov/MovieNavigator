import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

export default function Form({ handleModalClose }) {
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login, password);
    handleModalClose();
  };

    return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <h2>
        If you have an account at https://www.themoviedb.org/, you can log in
      </h2>
      <div>
        <TextField
          type="login"
          label="Login"
          value={login}
          required
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>
      <div>
        <TextField
          type="password"
          label="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleModalClose}
        >
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
}