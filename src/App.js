import React, { useEffect } from "react";
import { connect } from "react-redux";

import SelectComponent from "./components/Select";
import DogCard from "./components/Image";
import RandomButton from './components/RandomButton';

function App({ fetchingDogsList, fetchImageDog, dogList, dogImg }) {

  useEffect(() => {
    fetchingDogsList();
  }, []);

  return (
    <React.Fragment>
      <h1 style={style}>Dog App</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <h3 style={style}>Choose a Dog</h3>
          <SelectComponent dogList={dogList} />
          <DogCard status={'choose'}/>
        </div>
        <div>
          <h3 style={style}>Random Dog</h3>
          <RandomButton/>
          <DogCard status={'random'}/>
        </div>
      </div>
    </React.Fragment>
  );
}

const style = {
  textAlign: "center",
  fontFamily: "cursive",
  color: "#f50057"
};


const mapStateToProps = state => {
  return {
    dogList: state.allDogs,
    dogImg: state.dogImg
  };
};

const MapDispatchToProps = dispatch => {
  return {
    fetchingDogsList: () => dispatch({ type: "FETCHING_DATA" }),
    fetchImageDog: () => dispatch({ type: "FETCHING_DATA_IMAGE" })
  };
};

export default connect(mapStateToProps, MapDispatchToProps)(App);
