import React from 'react';
import MovieItem from './MovieItem.jsx';

const MovieList = function({movies, title, watch, targetList, updateMovie}) {
 
  // var targetList = movies.filter(movie =>{
  //       return movie.title.indexOf(title) !== -1
  //       && movie.watch.indexOf(watch) !== -1;
  // } );

  return (
  <ul>
    {
      targetList.map(movie => (
       <MovieItem  movie={movie} key={movie.id} updateMovie={updateMovie}  />
      ))

    }

  </ul>
  );
};

export default MovieList;