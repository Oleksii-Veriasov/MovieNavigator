import {
    FETCH_MOVIES_SEARCH_INITIATED,
    FETCH_MOVIES_SEARCH_FAILED,
    FETCH_MOVIES_SEARCH_SUCCEEDED,
    SEARCH_QUERY_SUBMITTED
  } from "../actions/moviesActions";
  
  let initialState = {
      query: "",
      movies:[],
      submit: false,
      isLoading: false,
      isError: false,
      errorMessage: '',
    };
  
    export const movieSearchReducer = (state = initialState, action) => {
      switch (action.type) {
        case FETCH_MOVIES_SEARCH_INITIATED:
          return {
            ...state,
            query: action.payload,
            isLoading: true,
            };
    
        case FETCH_MOVIES_SEARCH_FAILED:
          return {
            ...state,
            isError: true,
            isLoading: false,
            errorMessage: 'Fetch movies search error',
          };
    
        case FETCH_MOVIES_SEARCH_SUCCEEDED:
          return {
            ...state,
            movies: action.payload,
            isError: false,
            isLoading: false,
          };
    
        case SEARCH_QUERY_SUBMITTED:
          return {
            ...state,
            submittedQuery: action.payload,
          };
    
        default:
          return state;
      }
    };