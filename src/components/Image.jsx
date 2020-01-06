import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

function DogCard({ dogBreed, dogImg, randomDog, status, randomBreed }) {
  const classes = useStyles();

  if (status === "choose") {
    return (
      <React.Fragment>
        {dogBreed !== "" && dogImg !== "" ? (
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {dogBreed}
              </Typography>
              {dogImg ? (
                <img src={dogImg} alt="dogImg" style={{ width: "100%" }}></img>
              ) : null}
            </CardContent>
          </Card>
        ) : null}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        {randomBreed !== "" && randomDog !== "" ? (
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {randomBreed}
              </Typography>
              {randomDog ? (
                <img
                  src={randomDog}
                  alt="randomDog"
                  style={{ width: "100%" }}
                ></img>
              ) : null}
            </CardContent>
          </Card>
        ) : null}
      </React.Fragment>
    );
  }
}

const useStyles = makeStyles({
  card: {
    width: 300,
    height: "auto",
    margin: 8,
    borderColor: "#f50057"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 23
  }
});

const mapStateToProps = state => ({
  dogImg: state.getImageReducer.dogImg,
  dogBreed: state.getListReducer.dogBreed,
  randomDog: state.getRandomReducer.randomDog,
  randomBreed: state.getRandomReducer.randomDogBreed
});

export default connect(mapStateToProps)(DogCard);
