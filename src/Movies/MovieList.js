import React from "react";
import { Link } from "react-router-dom";

// The PetList iterates over the array of pets and creates
// a link to each one's individual page.
const MovieList = ({ movies }) => (
  <div>
    <h1>All Movies!</h1>
    <p>(Click a movie to see its trailer)</p>
    {movies.map(movie => (
      <p>
        <Link to={`/movies/${movie.id}`}>
          {movie.name}
        </Link>
      </p>
    ))}
  </div>
);

export default MovieList;