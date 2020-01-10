import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import TransitionsSnackbar from "./../Snackbar";
import { connect } from "react-redux";

import { getUserName } from "../../redux/actions/action";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

function LoginPage({ getUserName }) {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState("");
  const [errorText, setErrorText] = useState("");
  const [error, setError] = useState(false);

  function logIn(e) {
    e.preventDefault();
    if (value) {
      for (let lett in value) {
        if ((value[lett].match(/^[0-9]+$/) === null) === false) {
          setErrorText(`Name shouldn't have an any number`);
          setError(true);
          return;
        }
      }
      getUserName(value);
      history.push("/dog");
    }
  }

  function openError(value) {
    setError(value);
  }

  function handleValue(e) {
    setValue(e.target.value);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "30vh",
        marginTop: "50px"
      }}
    >
      <TransitionsSnackbar
        openError={openError}
        open={error}
        errorText={errorText}
      />
      <h3 style={{ fontFamily: "cursive", color: "rgb(245, 0, 87)" }}>
        If you want to use dog-api please<br/>
         write your name and click log in!
      </h3>
      <form
        onSubmit={logIn}
        id="onsubmit"
        className={classes.root}
        noValidate
        autoComplete="off"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          color="secondary"
          type="text"
          value={value}
          onChange={handleValue}
        />
        <Button color="secondary" size="large" type="submit">
          Log In
        </Button>
      </form>
    </div>
  );
}

const MapDispatchToProps = dispatch => {
  return {
    getUserName: name => dispatch(getUserName(name))
  };
};

export default connect(null, MapDispatchToProps)(LoginPage);
