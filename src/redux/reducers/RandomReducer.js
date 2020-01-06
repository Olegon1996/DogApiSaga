let initialState = {
  randomDog: "",
  randomDogBreed: "",
  loading: false,
  errorMessage: ""
};

export const getRandomReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_DATA_RANDOM":
      return {
        ...state,
        randomDog: action.payload
      };
    case "FETCHING_RANDOM_SUCCESSESED":
      return {
        ...state,
        randomDog: action.payload[0],
        randomDogBreed: action.payload[1],
        loading: false
      };
    case "FETCHING_RANDOM_ERROR":
      return {
        ...state,
        dogBreed: "",
        dogImg: "",
        allDogs: [],
        randomDog: "",
        loading: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
