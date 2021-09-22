import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    maxHeight: 1000,
  },
  media: {
    height: 700,
  },
  image: {
    height: 1000,
  },
});

export const MoviesItem = (movie, movieId = movie.movie.id) => {
  const classes = useStyles();
  // const { path } = useRouteMatch();
  const history = useHistory();

  const handleRoute = () => {
    history.push(`/details/${movie.movie.id}`);
  };

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
