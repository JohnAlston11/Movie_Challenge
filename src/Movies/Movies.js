// Import libraries
import React from "react";
import { Route, Switch } from "react-router-dom";
// Import the mock API
import moviesAPI from "./moviesAPI";
// Import React Components
import Movie from "./Movie";
import MovieList from "./MovieList";

class Movies extends React.Component {
  renderMovie = props => {
    const { id } = props.match.params;
    const movie = moviesAPI.getOne(Number(id));
    console.log(movie);
    if (!movie) {
      return <div> could not find movie </div>;
    } else {
      return (
        <Movie
          name={movie.name}
          director={movie.director}
          genre={movie.genre.join(', ')}
          stars={movie.stars.join(', ')}
        />
      );
    }
  };

  renderMovieList = () => {
    const movies = moviesAPI.getAll();
    return <MovieList movies={movies} />;
  };

  handleLike = () => {
    console.log('hi');
    window.alert('hey this does not do stuff but you are great');
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/movies" render={this.renderMovieList} />
          <Route path="/movies/:id" render={this.renderMovie} />
        </Switch>
      </div>
    );
  }
}
export default Movies;
