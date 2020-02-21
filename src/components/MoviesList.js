import React, { useState, useEffect } from "react";
import { MoviesService } from "../services/MoviesService";
import { Link } from 'react-router-dom';

export const MoviesList = () => {

  const [movies, setMovies] = useState({ data: { results: [] } });

  const requestMovies = async () => {
    const moviesResult = await MoviesService.getPopularMovies();
    console.log(moviesResult)
    setMovies(moviesResult);
  };

  useEffect(() => {
    requestMovies();
  }, []);

  return (
    <ul>
      {movies.data.results.map(movie => (
      <li key={movie.title}>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link></li>
      ))}
  </ul>
  )
}

