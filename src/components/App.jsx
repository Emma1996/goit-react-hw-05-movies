import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import { Header } from './Header/Header';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        {/* Redirect to the home page for unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
