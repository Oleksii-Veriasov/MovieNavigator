import {
  FETCH_REQUEST_TOKEN_INITIATED,
  FETCH_REQUEST_TOKEN_FAILED,
  FETCH_REQUEST_TOKEN_SUCCEEDED,
} from "../actions/authenticationActions";

let initialState = {
  requestToken: "",
  isError: false,
  errorMessage: "",
};

export const requestTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST_TOKEN_INITIATED:
      return {
        ...state,
        isError: false,
      };

    case FETCH_REQUEST_TOKEN_FAILED:
      return {
        ...state,
        isError: true,
        errorMessage: "Fetch request token error",
      };

    case FETCH_REQUEST_TOKEN_SUCCEEDED:
      return {
        ...state,
        requestToken: action.payload,
        isError: false,
      };

    default:
      return state;
  }
};
