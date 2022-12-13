import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieSlider from './MovieSlider';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=5b5802d0e99f98c8d53e4aa2c2de07d6&language=en-US&page=1'
      )
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div className="slider">
      <h1>Popular Movies</h1>
      <MovieSlider movies={movies} />
    </div>
  );
};

export default PopularMovies;
