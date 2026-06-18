import React, { useContext } from "react";
import "../Styles/card.css";
import "../App.css";
import { WatchlistContext } from "../context/WatchvistContext";

function MovieCard({ movie, showAddButton = true }) {
  const { addToWatchlist } = useContext(WatchlistContext);

  return (
    <div className="card">
      <img src={movie.image?.medium} alt={movie.name} />

      <div className="card-content">
        <h2>{movie.name}</h2>
      </div>

      <p>Rating: {movie.rating?.average ?? "N/A"}</p>

      <p>Language: {movie.language}</p>

      {showAddButton && (
        <button className="card-button" onClick={() => addToWatchlist(movie)}>
          Add To Watchlist
        </button>
      )}
    </div>
  );
}

export default MovieCard;
