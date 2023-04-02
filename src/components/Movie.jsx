import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie, changeMovieStatus, changeBudget }) => {
  const updateMovieStatus = () => {
    if (changeBudget(movie.isRented)) {
      changeMovieStatus(movie);
    }
  };
  return (
    <div className="movie">
      <Link to={`/movies/${movie.id}`}>
        <img className="movie-img" src={movie.img} alt="" />
        <br />
      </Link>
      {movie.isRented ? (
        <button onClick={updateMovieStatus}>-</button>
      ) : (
        <button onClick={updateMovieStatus}>+</button>
      )}
    </div>
  );
};

export default Movie;
