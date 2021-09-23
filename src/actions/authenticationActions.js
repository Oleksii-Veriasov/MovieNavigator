// GET
//request_token
import axios from "axios";
export const FETCH_REQUEST_TOKEN_INITIATED = "FETCH_REQUEST_TOKEN_INITIATED";
export const FETCH_REQUEST_TOKEN_FAILED = "FETCH_REQUEST_TOKEN_FAILED";
export const FETCH_REQUEST_TOKEN_SUCCEEDED = "FETCH_REQUEST_TOKEN_SUCCEEDED";
export const FETCH_USER_VALIDATION_INITIATED =
  "FETCH_USER_VALIDATION_INITIATED";
export const FETCH_USER_VALIDATION_FAILED = "FETCH_USER_VALIDATION_FAILED";
export const FETCH_USER_VALIDATION_SUCCEEDED =
  "FETCH_USER_VALIDATION_SUCCEEDED";
export const FETCH_USER_SESSION_INITIATED = "FETCH_USER_SESSION_INITIATED";
export const FETCH_USER_SESSION_FAILED = "FETCH_USER_SESSION_FAILED";
export const FETCH_USER_SESSION_SUCCEEDED =
  "FETCH_USER_SESSION_SUCCEEDED_SUCCEEDED";

const TMDB_API_KEY = `9f963703358bbbdd8be7404104efc768`;
const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  responseType: "json",
  params: {
    api_key: `${TMDB_API_KEY}`,
  },
});
// debugger;

export const getRequestToken = () => async (dispatch) => {
  dispatch({ type: FETCH_REQUEST_TOKEN_INITIATED });
  try {
    const response = await tmdb.get(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=9f963703358bbbdd8be7404104efc768`
    );

    const requestToken = await response.data.request_token;

    dispatch({
      type: FETCH_REQUEST_TOKEN_SUCCEEDED,
      payload: requestToken,
    });
  } catch (error) {
    dispatch({ type: FETCH_REQUEST_TOKEN_FAILED });
    console.error("%cData Fetching Error:", "font-size: 18px", error);
  }
};

// user validation post body:
// {
//     "username": "",
//     "password": "",
//     "request_token": ""
//   }

export const getUserValidation =
  (userName, password, requestToken) => async (dispatch) => {
    dispatch({ type: FETCH_USER_VALIDATION_INITIATED });
    try {
      const response = await tmdb.post(
        `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=9f963703358bbbdd8be7404104efc768`,
        {
          username: "TestAlfred",
          password: "AlfredAlfred",
          request_token: `4c060233a4cd415ac0396f898d8b032173a8bc18`,
        }

        // {
        //   username: `${userName}`,
        //   password: `${password}`,
        //   request_token: `${requestToken}`,
        // }
      );

      const isValidated = await response.data.success;

      dispatch({
        type: FETCH_USER_VALIDATION_SUCCEEDED,
        payload: isValidated,
      });
    } catch (error) {
      dispatch({ type: FETCH_USER_VALIDATION_FAILED });
      console.error("%cData Fetching Error:", "font-size: 18px", error);
    }
  };

export const getUserSessionId =
  (userName, password, requestToken) => async (dispatch) => {
    dispatch({ type: FETCH_USER_SESSION_INITIATED });
    try {
      const response = await tmdb.post(
        `https://api.themoviedb.org/3/authentication/session/new?api_key=9f963703358bbbdd8be7404104efc768`,
        {
          request_token: `4c060233a4cd415ac0396f898d8b032173a8bc18`,
        }

        // {
        //   request_token: `${requestToken}`,
        // }
      );

      const sessionId = await response.data.success;

      dispatch({
        type: FETCH_USER_SESSION_SUCCEEDED,
        payload: sessionId,
      });
    } catch (error) {
      dispatch({ type: FETCH_USER_SESSION_FAILED });
      console.error("%cData Fetching Error:", "font-size: 18px", error);
    }
  };
