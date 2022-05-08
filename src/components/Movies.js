import React from "react";
import { movies } from "../data";

function Movies() {
  const renderMovies = movies.map((movie, index) => {
    return (
      <div key={index}>
        <h3>Name: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        Genres:
        <ul> 
          {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}
        </ul>
      </div>
    )
  })
  
  return (
    <>
      <h1>Movies Page</h1>
      {renderMovies}
    </> 
  )
}

export default Movies;
