import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
        background: 'rgb(245, 0, 87)'
    }
  }
}));

export default function TransitionsSnackbar({ openError, open, errorText }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: open,
    Transition: Slide
  });

  return (
    <div>
      <Snackbar
        className={classes.root}
        open={open}
        onClose={() => openError(false)}
        TransitionComponent={state.Transition}
        message={errorText}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
    </div>
  );
}
