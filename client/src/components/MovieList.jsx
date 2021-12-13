import React from 'react';
import MovieItem from './MovieItem.jsx';

const MovieList = function({movies, title, watch, updateMovie}) {
  // var targetList = [];
  // movies.map(movie =>{
  //   if (movie.title.indexOf(title) !== -1) {
  //     targetList.push(movie);
  //   }
  // });
  var targetList = movies.filter(movie =>{
        return movie.title.indexOf(title) !== -1 && movie.watch.indexOf(watch) !== -1;
  } );
console.log('watch from movielist:', watch);
console.log("targetList:", targetList);
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