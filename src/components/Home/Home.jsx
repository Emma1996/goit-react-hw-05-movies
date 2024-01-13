import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/movieService';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const movies = await getTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error('Error fetching trending movies:', error.message);
      }
    }
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <p>{movie.title || movie.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
