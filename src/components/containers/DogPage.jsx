import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import SelectComponent from "../Select";
import DogCard from "../Image";
import RandomButton from "../RandomButton";
import Button from "@material-ui/core/Button";

function DogPage({ fetchingDogsList, dogList, name }) {
  const history = useHistory();

  useEffect(() => {
    fetchingDogsList();
    if(!name){
      history.push("/");
    }
  }, []);

  function logOut(e) {
    history.push("/");
  }

  return (
    <React.Fragment>
      <span style={styleName}>Hello {name}!</span>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap"
        }}
      >
        <div>
          <h3 style={style}>Choose a Dog</h3>
          <SelectComponent dogList={dogList} />
          <DogCard status={"choose"} />
        </div>
        <div>
          <h3 style={style}>Random Dog</h3>
          <RandomButton />
          <DogCard status={"random"} />
        </div>
      </div>
      <Button color="secondary" size="large" onClick={logOut} style={{position: 'fixed', top: '25px'}}>
        Log Out
      </Button>
    </React.Fragment>
  );
}

const style = {
  textAlign: "center",
  fontFamily: "cursive",
  color: "#f50057"
};

const styleName = {
  position: "absolute",
  right: "30px",
  top: "35px",
  textAlign: "center",
  fontFamily: "cursive",
  color: "rgb(245, 0, 87)"
};

const mapStateToProps = state => {
  return {
    dogList: state.allDogs,
    dogImg: state.dogImg,
    name: state.getUserReducer.userName
  };
};

const MapDispatchToProps = dispatch => {
  return {
    fetchingDogsList: () => dispatch({ type: "FETCHING_DATA" }),
    fetchImageDog: () => dispatch({ type: "FETCHING_DATA_IMAGE" })
  };
};

export default connect(mapStateToProps, MapDispatchToProps)(DogPage);
