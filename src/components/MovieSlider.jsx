import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import LoadingSkeleton from './LoadingSkeleton';

const MovieSlider = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const res = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY
          }
        });
        setPopularMovies(res.data.results.slice(0, 5));
      } catch (error) {
        console.error("Error loading popular movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopular();
  }, []);

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <Carousel>
      {popularMovies.map(movie => (
        <Carousel.Item key={movie.id}>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
            <p>{movie.overview.slice(0, 100)}...</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MovieSlider;
