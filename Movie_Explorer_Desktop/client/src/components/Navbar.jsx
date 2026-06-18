import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/navbar.css";

function Navbar({ search, setSearch }) {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h1 className="logo">Movie App</h1>
      <input
        type="text"
        placeholder="search movie"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />
      <button className="watchlist-btn" onClick={() => navigate("/watchlist")}>
        Watchlist
      </button>
    </nav>
  );
}

export default Navbar;
