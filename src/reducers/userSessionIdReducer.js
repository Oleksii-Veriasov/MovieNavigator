import {
  FETCH_USER_SESSION_INITIATED,
  FETCH_USER_SESSION_FAILED,
  FETCH_USER_SESSION_SUCCEEDED,
} from "../actions/authenticationActions";

let initialState = {
  sessionId: "",
  isError: false,
  errorMessage: "",
};

export const userSessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SESSION_INITIATED:
      return {
        ...state,
        isError: false,
      };

    case FETCH_USER_SESSION_FAILED:
      return {
        ...state,
        isError: true,
        errorMessage: "Fetch sesionId request error",
      };

    case FETCH_USER_SESSION_SUCCEEDED:
      return {
        ...state,
        sessionId: action.payload,
        isError: false,
      };

    default:
      return state;
  }
};
