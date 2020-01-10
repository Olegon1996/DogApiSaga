let initialState = {
  userName: "",
};

export const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NAME_BREED":
      return {
        ...state,
        userName: action.payload
      };
    default:
      return state;
  }
};
