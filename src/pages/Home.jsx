import MovieList from "../components/MovieList";
import { movies as allMovies } from "../data/movies";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");

  const filteredMovies = allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Фільми</h1>
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
