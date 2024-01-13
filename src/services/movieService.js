const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjk4Y2E3MzMzMzdmNGNlMmMwODFmMjA5MTZmMTk5MyIsInN1YiI6IjY1MzE2ZDE1ZWZlMzdjMDExZTczY2M3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nxiYkjdnG2_GU5ePcG464t1IH1IHwRX37doUVWw8ttM'; // Replace 'your_access_token' with your actual access token
const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

const handleResponse = async response => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      `HTTP error! Status: ${response.status}, Message: ${errorData.message}`
    );
  }
  return response.json();
};

export const getTrendingMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/trending/all/day`, options);
    const data = await handleResponse(response);
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error.message);
    throw new Error('Could not fetch trending movies');
  }
};

export const searchMovies = async query => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?include_adult=false&language=en-US&page=1&query=${query}`,
      options
    );
    const data = await handleResponse(response);
    return data.results;
  } catch (error) {
    console.error('Error searching movies:', error.message);
    throw new Error('Could not search movies');
  }
};

export const getMovieDetails = async movieId => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?language=en-US`,
      options
    );
    const data = await handleResponse(response);
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error.message);
    throw new Error('Could not fetch movie details');
  }
};

export const getMovieCast = async movieId => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/credits?language=en-US`,
      options
    );
    const data = await handleResponse(response);
    return data.cast;
  } catch (error) {
    console.error('Error fetching movie cast:', error.message);
    throw new Error('Could not fetch movie cast');
  }
};
export const getMovieReviews = async movieId => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/reviews?language=en-US&page=1`,
      options
    );
    const data = await handleResponse(response);
    return data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error.message);
    throw new Error('Could not fetch movie reviews');
  }
};
