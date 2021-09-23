import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { getMovieDetails } from "../actions/moviesActions";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import LinearDeterminate from "../components/Helpers/Loader";
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
  const history = useHistory();

  if (!movieId) {
    history.push(`/details/{movieId}`);
  }

  useEffect(() => {
    getMovieDetails(movieId);
  }, [getMovieDetails, movieId]);

  return (
    <Container>
      {isError && <div>{errorMessage}</div>}
      {isLoading ? (
        <LinearDeterminate />
      ) : (
        <>
          <div>{movieId}</div>
          <Typography
            component="div"
            movie={movie}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
              maxWidth: "100%",
              height: "600px",
              maxHeight: "100%",
              // margin: "auto",
              backgroundPosition: "center",
              // display: "block",
              // backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></Typography>
          <Typography component="h3">{movie.overview}</Typography>
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
