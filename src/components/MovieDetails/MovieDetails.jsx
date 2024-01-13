import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
} from 'services/movieService';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import styles from './MovieDetails.module.css';
export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        if (movieId) {
          const details = await getMovieDetails(movieId);
          setMovieDetails(details);
        }
      } catch (error) {
        console.error('Error fetching movie details:', error.message);
      }
    };

    const fetchCast = async () => {
      try {
        if (movieId) {
          const castData = await getMovieCast(movieId);
          setCast(castData);
        }
      } catch (error) {
        console.error('Error fetching movie cast:', error.message);
      }
    };

    const fetchReviews = async () => {
      try {
        if (movieId) {
          const reviewsData = await getMovieReviews(movieId);
          setReviews(reviewsData);
        }
      } catch (error) {
        console.error('Error fetching movie reviews:', error.message);
      }
    };

    fetchMovieDetails();
    fetchCast();
    fetchReviews();
  }, [movieId]);

  // Funcția nu mai este necesară, deoarece 'Overview' este implicit activ.

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.movieDetails}>
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />

      {/* Meniul de navigare */}
      <nav>
        <ul>
          {/* butonul pentru 'Cast' */}
          <li>
            <button onClick={() => setActiveSection('cast')}>Cast</button>
          </li>
          {/* butonul pentru 'Reviews' */}
          <li>
            <button onClick={() => setActiveSection('reviews')}>Reviews</button>
          </li>
        </ul>
      </nav>

      {/* Afișează secțiunea corespunzătoare în funcție de secțiunea activă */}
      {activeSection === 'cast' && <Cast cast={cast} />}
      {activeSection === 'reviews' && <Reviews reviews={reviews} />}
    </div>
  );
};
