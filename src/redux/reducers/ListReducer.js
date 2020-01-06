let initialState = {
  allDogs: [],
  loading: false,
  errorMessage: "",
  dogBreed: "",
};

export const getListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DOG_BREED":
      return {
        ...state,
        dogBreed: action.payload
      };

    case "FETCHING_DATA":
      return {
        ...state,
        loading: true
      };

    case "FETCHING_DATA_SUCCESSESED":
      return {
        ...state,
        allDogs: action.payload,
        loading: false
      };

    case "FETCHING_IMAGE_ERROR":
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
