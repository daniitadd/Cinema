import { useState } from 'react';
import { movies as allMovies } from './data/movies';
import MovieList from './components/MovieList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";

function App() {
  const [query, setQuery] = useState("");

  const filteredMovies = allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Фільми</h1>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking/:id" element={<Booking />} />
      </Routes>
      </Router>
      <input
        type="text"
        placeholder="Пошук фільму..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
