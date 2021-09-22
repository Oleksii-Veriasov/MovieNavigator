import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { getMovieDetails } from "../actions/moviesActions";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Loader from "../components/Helpers/Loader";
// debugger;

const MovieDetailsPage = ({
  getMovieDetails,
  movie,
  credits,
  videos,
  images,
  clickedMovieId,
  isError,
  isLoading,
  errorMessage,
}) => {
  let { movieId } = useParams();
  let history = useHistory();
  // history.push(`/details/${movieId}`);
  if (!movieId) {
    history.push(`/details/588228`);
  }

  useEffect(() => {
    getMovieDetails(movieId);
  }, []);

  return (
    <Container>
      {isError && <div>{errorMessage}</div>}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>{movieId}</div>
          <Typography
            component="div"
            movie={movie}
            style={{
              // backgroundImage: `url(https://image.tmdb.org/t/p/original//yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg)`,
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
              maxWidth: "100%",
              height: "400px",
              maxHeight: "100%",
              // margin: "auto",
              backgroundPosition: "center",
              // display: "block",
              // backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {/* <img src = "https://image.tmdb.org/t/p/w500//yKSNSOwHOeiZv2DxwHAlpiEXBB4.jpg" alt="poster"></img> */}
            {movie.overview}
          </Typography>
        </>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    movieId: state.movieDetailsReducer.movieId,
    movie: state.movieDetailsReducer.movie,
    isError: state.movieDetailsReducer.isError,
    isLoading: state.movieDetailsReducer.isLoading,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetails: (movieId) => dispatch(getMovieDetails(movieId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);
