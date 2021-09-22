import {
  FETCH_MOVIE_DETAILS_INITIATED,
  FETCH_MOVIE_DETAILS_FAILED,
  FETCH_MOVIE_DETAILS_SUCCEEDED,
} from "../actions/moviesActions";

let initialState = {
  movieId: "",
  movie: [],
  credits: null,
  videos: null,
  images: null,
  clickedMovieId: "",
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const movieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS_INITIATED:
      return {
        ...state,
        movieId: action.movieId,
        isError: false,
        isLoading: false,
      };

    case FETCH_MOVIE_DETAILS_FAILED:
      return {
        ...state,
        isError: true,
        isLoading: false,
        errorMessage: "Fetch movie details error",
      };

    case FETCH_MOVIE_DETAILS_SUCCEEDED:
      return {
        ...state,
        movie: action.payload,
        // credits: { ...action.payload.credits },
        // videos: { ...action.payload.videos },
        // images: { ...action.payload.images },
        isError: false,
        isLoading: false,
      };

    default:
      return state;
  }
};
