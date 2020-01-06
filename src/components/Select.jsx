import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import { getDogBreed } from "../redux/actions/action";


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function SelectComponent({ fetchImageDog, dogList, getDogBreed }) {
  const classes = useStyles();
  const [name, setName] = React.useState("");

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setName(event.target.value);
    fetchImageDog(event.target.value);
    getDogBreed(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" color='secondary' className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
          Choose a dog
        </InputLabel>
        <Select
          native
          value={name}
          onChange={handleChange}
          labelWidth={labelWidth}
          inputProps={{
            name: "name",
            id: "outlined-age-native-simple"
          }}
        >
          <option value="" />
          {dogList && dogList.length > 0
            ? dogList.map(dog => (
                <option key={dog} value={dog}>
                  {dog}
                </option>
              ))
            : null}
        </Select>
      </FormControl>
    </div>
  );
}

const mapStateToProps = state => ({ dogList: state.getListReducer.allDogs });

const MapDispatchToProps = dispatch => ({
  fetchImageDog: name => dispatch({ type: "FETCHING_DATA_IMAGE", breed: name }),
  getDogBreed: breed => dispatch(getDogBreed(breed))
});

export default connect(mapStateToProps, MapDispatchToProps)(SelectComponent);
