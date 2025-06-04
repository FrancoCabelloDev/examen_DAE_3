import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieSlider from './MovieSlider';
import MovieList from './MovieList';

const HomePage = () => {
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
          params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            language: 'es-ES'
          }
        });
        setNowPlaying(res.data.results);
      } catch (err) {
        console.error("ERROR:", err);
      }
    };

    fetchNowPlaying();
  }, []);

  return (
    <div>
      <MovieSlider />
      {nowPlaying.length > 0 && <MovieList movies={nowPlaying} />}
    </div>
  );
};

export default HomePage;
