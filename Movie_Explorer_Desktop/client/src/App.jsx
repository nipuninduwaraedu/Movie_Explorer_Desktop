import { useEffect, useState } from "react";
import axios from "axios";
import "./Styles/Home.css";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import Watchlist from "./pages/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WatchlistProvider } from "./context/WatchvistContext";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchMovie = async () => {
    try {
      const response = await axios.get("https://api.tvmaze.com/shows");
      setMovies(response.data.slice(0, 20));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const filterMovie = movies.filter((movie) =>
    movie.name.toLowerCase().includes(search.toLocaleLowerCase()),
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <BrowserRouter>
      <WatchlistProvider>
        <div className="container">
          <Navbar search={search} setSearch={setSearch} />

          <Routes>
            <Route
              path="/"
              element={
                <div className="movie-grid">
                  {filterMovie.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </div>
              }
            />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </div>
      </WatchlistProvider>
    </BrowserRouter>
  );
}

export default App;
