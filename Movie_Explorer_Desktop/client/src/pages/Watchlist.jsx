import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { WatchlistContext } from "../context/WatchvistContext";
import MovieCard from "../components/MovieCard";

export default function Watchlist() {
  const navigate = useNavigate();
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);

  return (
    <div className="container">
      <div className="watchlist-header">
        <h1>My watchlist</h1>
        <button
          type="button"
          className="watchlist-nav-button"
          onClick={() => navigate("/")}
        >
          Browse Movies
        </button>
      </div>

      {watchlist.length === 0 && <p>No movies added yet</p>}

      <div className="grid">
        {watchlist.map((movie) => (
          <div key={movie.id} className="watchlist-item">
            <MovieCard movie={movie} showAddButton={false} />
            <button
              onClick={() => removeFromWatchlist(movie.id)}
              className="remove-button"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
