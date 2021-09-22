import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLoginRequest = () => {
    console.log("Login fire!");
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">
        If you have an account at https://www.themoviedb.org/, you can log in
      </h2>
      <TextField id="standard-basic" label="Login" />
      <TextField id="standard-basic" label="Password" type="password" />
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        onClick={handleLoginRequest}
      >
        Open Login Modal
      </Button>
    </div>
  );

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        type="button"
        onClick={handleOpen}
      >
        Open Login Modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="simple-modal-title"
        // aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
