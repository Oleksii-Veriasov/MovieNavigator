import axios from "axios";
export const FETCH_MOVIES_INITIATED = "FETCH_MOVIE_INITIATED";
export const FETCH_MOVIES_FAILED = "FETCH_MOVIE_FAILED";
export const FETCH_MOVIES_SUCCEEDED = "FETCH_MOVIE_SUCCEEDED";

const TMDB_API_KEY = `9f963703358bbbdd8be7404104efc768`;
const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: `${TMDB_API_KEY}`,
  },
});

export const getMovies = () => async (dispatch) => {
  dispatch({ type: FETCH_MOVIES_INITIATED });
  try {
    const response = await tmdb.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=9f963703358bbbdd8be7404104efc768&language=en-US&page=1`
    );
    console.log("REsponse: "+response);
    const responseJson = await response.data.results;
    console.log(JSON.stringify(responseJson));
    dispatch({
      type: FETCH_MOVIES_SUCCEEDED,
      payload: responseJson
    });
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_FAILED });
    console.error("%cData Fetching Error:", "font-size: 18px", error);
  }
};
