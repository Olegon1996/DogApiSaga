import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {

    "& > *": {
      margin: theme.spacing(1),
      padding: '15px 87px',
    }
  }
}));

function RandomButton({fetchRandomDog}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="secondary" onClick={() => fetchRandomDog()}>
        Random Dog
      </Button>
    </div>
  );
}

const MapDispatchToProps = dispatch => ({
  fetchRandomDog: () => dispatch({ type: "FETCHING_DATA_RANDOM" })
});

export default connect(null, MapDispatchToProps)(RandomButton);
