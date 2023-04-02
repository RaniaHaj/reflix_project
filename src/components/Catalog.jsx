import React from "react";
import { useState } from "react";
import Movie from "./Movie";

const Catalog = ({ movies, changeMovieStatus, setBudget, budget }) => {
  let [searchMovie, setSearchMovie] = useState("");

  const updateText = (event) => {
    setSearchMovie(event.target.value);
  };

  const updateBudget = (amount) => {
    setBudget(amount);
  };

  const changeBudget = (isRentedMovie) => {
    const RENT_MOVIE = 3;
    if (!isRentedMovie) {
      if (budget < RENT_MOVIE) {
        alert("There are insufficient funds");
        return false;
      } else {
        updateBudget(budget - RENT_MOVIE);
        return true;
      }
    } else {
      updateBudget(budget + RENT_MOVIE);
      return true;
    }
  };

  const matchedMovies = searchMovie
    ? movies.filter((m) =>
        m.title.toLowerCase().includes(searchMovie.toLowerCase())
      )
    : movies;
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchMovie}
        onChange={updateText}
      />
      <span className="budget">Budget: ${budget.toFixed(2)}</span>
      <div className="rented">
        {matchedMovies.filter((m) => m.isRented).length ? "Rented:" : ""}
      </div>
      <div className="movies-container">
        {matchedMovies
          .filter((m) => m.isRented)
          .map((m) => {
            return (
              <Movie
                key={m.id}
                movie={m}
                changeMovieStatus={changeMovieStatus}
                changeBudget={changeBudget}
              />
            );
          })}
      </div>
      <div className="catalog">Catalog:</div>
      <div className="movies-container">
        {matchedMovies.map((m) => {
          return (
            <Movie
              key={m.id}
              movie={m}
              changeMovieStatus={changeMovieStatus}
              changeBudget={changeBudget}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Catalog;
