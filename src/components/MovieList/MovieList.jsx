import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// useHistory for routing to Details page onClick
import { useHistory } from 'react-router-dom';
import './MovieList.css';

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  // history to route to details page onClick
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  const handleClickToDetail = (event) => {
    event.preventDefault();
    // route to the clicked movie by it's id
    history.push(`/movies/${event.currentTarget.id}`);
  };

  return (
    <main>
      <h1>Playing now</h1>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div
              data-testid="movieItem"
              key={movie.id}
              onClick={handleClickToDetail}
              id={movie.id}
              >
              <h3>{movie.title}, {movie.id}</h3>
              <img src={movie.poster} alt={movie.title} data-testid="toDetails"/>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
