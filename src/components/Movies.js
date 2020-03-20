import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(movie => 
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <h4>Time:{movie.time}</h4>
          Genres:
          <ul>
            {movie.genres.map(genre=><li key={genre}>{genre}</li>)}
          </ul>
        </div>)}
    </div>
  );
};

export default Movies;
