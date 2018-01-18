// Import libraries
import React from "react";
import { Route, Switch } from "react-router-dom";
// Import the mock API
import moviesAPI from "./moviesAPI";
// Import React Components
import Movie from "./Movie";
import MovieList from "./MovieList";

class Genre extends React.Component {
  renderGenre = props => {
    const { genre } = props.match.params;
    const movies = moviesAPI.genres(genre);
    console.log(movies);
    return <MovieList movies={movies} />;
  };

  render() {
    return (
      <div>
        <Switch>
          <Route path="/genre/:genre" render={this.renderGenre} />
        </Switch>
      </div>
    );
  }
}
export default Genre;