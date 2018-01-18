import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ name, director, genre, stars}) => (
  <div>
    <div>
      <h1>{name}</h1>
      <h2> Director: {director}</h2>
      <h3>Genre: {genre}</h3>
      <h4>Starring: {stars}</h4>
      <br />
      <Link to="/movies">Back</Link>
    </div>
  </div>
);

export default Movie;
