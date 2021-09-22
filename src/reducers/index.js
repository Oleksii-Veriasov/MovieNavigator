import {combineReducers} from 'redux';
import { movieListReducer } from './movieReducer';
import { movieDetailsReducer } from "./movieDetailsReducer"

export const reducers = combineReducers({
    movieListReducer,
    movieDetailsReducer,
  });