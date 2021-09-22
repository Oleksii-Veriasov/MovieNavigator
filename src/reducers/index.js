import {combineReducers} from 'redux';
import { movieListReducer } from './movieReducer';
import { movieDetailsReducer } from "./movieDetailsReducer"
import { movieSearchReducer } from './movieSearchReducer';

export const reducers = combineReducers({
    movieListReducer,
    movieDetailsReducer,
    movieSearchReducer,
  });