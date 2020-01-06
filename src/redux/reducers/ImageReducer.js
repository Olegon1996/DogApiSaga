let initialState = {
  dogImg: "",
  loading: false,
  errorMessage: ""
};

export const getImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_DATA_IMAGE":
      return {
        ...state,
        loading: true
      };
    case "FETCHING_IMAGE_SUCCESSESED":
      return {
        ...state,
        dogImg: action.payload,
        loading: false
      };
    case "FETCHING_DATA_ERROR":
      return {
        ...state,
        dogBreed: "",
        dogImg: "",
        allDogs: [],
        loading: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
