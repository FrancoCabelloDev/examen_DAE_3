import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDebounce } from '../hooks/useDebounce';
import MovieCard from './MovieCard';

const MovieSearch = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const debouncedInput = useDebounce(input, 300);

  useEffect(() => {
    if (!debouncedInput) {
      setResults([]);
      return;
    }

    const fetchMovies = async () => {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: import.meta.env.VITE_TMDB_API_KEY,
          query: debouncedInput
        }
      });
      setResults(res.data.results);
    };

    fetchMovies();
  }, [debouncedInput]);

  return (
    <div className="container my-4">
      <input
        className="form-control"
        type="text"
        placeholder="Buscar película..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="row mt-3">
        {results.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
