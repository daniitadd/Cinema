import { useState } from 'react';
import { movies as allMovies } from './data/movies';
import MovieList from './components/MovieList';

function App() {
  const [query, setQuery] = useState("");

  const filteredMovies = allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Картки фільмів</h1>
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
