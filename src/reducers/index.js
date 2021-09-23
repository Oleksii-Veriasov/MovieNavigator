import { combineReducers } from "redux";
import { movieListReducer } from "./movieReducer";
import { movieDetailsReducer } from "./movieDetailsReducer";
import { movieSearchReducer } from "./movieSearchReducer";
import { requestTokenReducer } from "./requestTokenReducer";
import { userValidationReducer } from "./userValidationReducer";
import { userSessionReducer } from "./userSessionIdReducer";

export const reducers = combineReducers({
  movieListReducer,
  movieDetailsReducer,
  movieSearchReducer,
  requestTokenReducer,
  userValidationReducer,
  userSessionReducer,
});
