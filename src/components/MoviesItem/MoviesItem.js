import React from "react";
// import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import Link from "@material-ui/core/Link";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import { handleMovieClick, getMovieDetails } from "../../actions/moviesActions";
import { useRouteMatch, useHistory} from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    maxHeight: 1000,
  },
  media: {
    height: 400,
  },
  image: {
    height: 1000,
  },
});

export const MoviesItem = (movie, movieId = movie.movie.id) => {
  // console.log("MoviesItem: "+ movie.movie)
  const classes = useStyles();
  // const { path } = useRouteMatch();
  const history = useHistory();

  const handleRoute = () =>{ 
    history.push(`/details/${movie.movie.id}`);
    // history.push(`/details/588228`);
  }
  // console.log(path);
  // debugger;

  const movieDetailPath = `https://api.themoviedb.org/3/movie/${movie.movie.id}?api_key=<<api_key>>&language=en-US`;
  //https://api.themoviedb.org/3/movie/4567?api_key=9f963703358bbbdd8be7404104efc768&language=en-US

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w500/${movie.movie.poster_path}`}
          title={`${movie.movie.title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.movie.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.movie.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <FavoriteBorderIcon />
        </Button>
        <Button onClick={handleRoute} size="small" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

// const mapStateToProps = (state) => {
//   return {
    
//   };
// };

// export default connect(mapStateToProps, { handleMovieClick, getMovieDetails })(
//   MoviesItem
// );
