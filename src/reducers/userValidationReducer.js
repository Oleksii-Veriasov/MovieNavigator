import {
  FETCH_USER_VALIDATION_INITIATED,
  FETCH_USER_VALIDATION_FAILED,
  FETCH_USER_VALIDATION_SUCCEEDED,
} from "../actions/authenticationActions";

let initialState = {
  requestToken: "",
  isValidated: false,
  userName: "",
  password: "",
  isError: false,
  errorMessage: "",
};

export const userValidationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_VALIDATION_INITIATED:
      return {
        ...state,
        isError: false,
      };

    case FETCH_USER_VALIDATION_FAILED:
      return {
        ...state,
        isError: true,
        errorMessage: "Fetch validation request error",
      };

    case FETCH_USER_VALIDATION_SUCCEEDED:
      return {
        ...state,
        isValidated: action.payload,
        isError: false,
      };

    default:
      return state;
  }
};
