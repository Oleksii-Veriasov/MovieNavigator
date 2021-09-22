import {
  FETCH_MOVIES_INITIATED,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIES_SUCCEEDED,
} from "../actions/moviesActions";

let initialState = {
    movies:[],
    isLoading: false,
    isError: false,
    errorMessage: '',
  };

  export const movieListReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MOVIES_INITIATED:
        return {
          ...state,
          isLoading: true,
          };
  
      case FETCH_MOVIES_FAILED:
        return {
          ...state,
          isError: true,
          isLoading: false,
          errorMessage: 'Fetch movies error',
        };
  
      case FETCH_MOVIES_SUCCEEDED:
        return {
          ...state,
          movies: action.payload,
          isError: false,
          isLoading: false,
        };
  
    //   case SEARCH_QUERY_SUBMITTED:
    //     return {
    //       ...state,
    //       submittedQuery: action.payload,
    //     };
  
      default:
        return state;
    }
  };