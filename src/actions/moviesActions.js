import axios from "axios";
import { useHistory } from "react-router-dom";
export const FETCH_MOVIES_INITIATED = "FETCH_MOVIE_INITIATED";
export const FETCH_MOVIES_FAILED = "FETCH_MOVIE_FAILED";
export const FETCH_MOVIES_SUCCEEDED = "FETCH_MOVIE_SUCCEEDED";
export const FETCH_MOVIE_DETAILS_INITIATED = "FETCH_MOVIE_DETAIL_INITIATED";
export const FETCH_MOVIE_DETAILS_FAILED = "FETCH_MOVIE_DETAIL_FAILED";
export const FETCH_MOVIE_DETAILS_SUCCEEDED = "FETCH_MOVIE_DETAIL_SUCCEEDED";
export const FETCH_MOVIES_SEARCH_INITIATED = "FETCH_MOVIES_SEARCH_INITIATED";
export const FETCH_MOVIES_SEARCH_FAILED = "FETCH_MOVIES_SEARCH_FAILED";
export const FETCH_MOVIES_SEARCH_SUCCEEDED = "FETCH_MOVIES_SEARCH_SUCCEEDED";
export const SEARCH_QUERY_SUBMITTED = "SEARCH_QUERY_SUBMITTED";
export const MOVIE_CLICKED = "FETCH_MOVIE_DETAIL_SUCCEEDED";

const TMDB_API_KEY = `9f963703358bbbdd8be7404104efc768`;
const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  responseType: "json",
  params: {
    api_key: `${TMDB_API_KEY}`,
  },
});
// debugger;

export const getMovies = () => async (dispatch) => {
  dispatch({ type: FETCH_MOVIES_INITIATED });
  try {
    const response = await tmdb.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=9f963703358bbbdd8be7404104efc768&language=en-US&page=1`
    );

    const responseData = await response.data.results;

    dispatch({
      type: FETCH_MOVIES_SUCCEEDED,
      payload: responseData,
    });
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_FAILED });
    console.error("%cData Fetching Error:", "font-size: 18px", error);
  }
};

export const getMovieDetails = (movieId) => async (dispatch) => {
//   console.log(movieId);
  dispatch({ type: FETCH_MOVIE_DETAILS_INITIATED, movieId });
  try {
    const response = await tmdb.get(
      //   `https://api.themoviedb.org/3/movie/588228?api_key=9f963703358bbbdd8be7404104efc768&language=en-US&page=1`
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=9f963703358bbbdd8be7404104efc768&language=en-US&page=1`
    );

    const responseData = await response.data;
    console.log("Response: " + responseData);
    dispatch({
      type: FETCH_MOVIE_DETAILS_SUCCEEDED,
      //   payload: JSON.stringify(responseJson),
      payload: responseData,
    });
  } catch (error) {
    dispatch({ type: FETCH_MOVIE_DETAILS_FAILED });
    console.error("%cData Fetching Error:", "font-size: 18px", error);
  }
};

export const getMoviesSearchRequest = (query) => async (dispatch) => {
  console.log("action query: "+query);
  if (query) {
    dispatch({ type: SEARCH_QUERY_SUBMITTED, payload: query });
  }
  dispatch({ type: FETCH_MOVIES_SEARCH_INITIATED, query });
  try {
    const response = await tmdb.get(
      `https://api.themoviedb.org/3/search/movie?api_key=9f963703358bbbdd8be7404104efc768&language=en-US&query=${query}&page=1`
    );

    const responseData = await response.data.results;
    console.log("Response: " + responseData);
    dispatch({
      type: FETCH_MOVIES_SEARCH_SUCCEEDED,
      //   payload: JSON.stringify(responseJson),
      payload: responseData,
    });
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_SEARCH_FAILED });
    console.error("%cData Fetching Error:", "font-size: 18px", error);
  }
};

export const handleMovieClick = (id, path) => async (dispatch) => {
  // debugger;
  dispatch({ type: MOVIE_CLICKED, payload: id });
  const history = useHistory();
//   console.log();
  let navigationPath = `${path}/${id}/details`;
  history.push(navigationPath);
};
