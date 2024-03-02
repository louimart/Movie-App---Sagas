import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// useHistory for routing to Details page onClick
import { useHistory } from "react-router-dom";
import './MovieList.css';

function MovieList() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);
  // history to route to details page onClick
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

const handleClickToDetail = (event)=>{
  event.preventDefault();
  console.log('details page for', event.target.alt)
  alert(`Going to Details, ${event.target.alt}`);
  // route to the clicked movie via it's id
  history.push(`/details/${event.target.id}}`);
}

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id} onClick={handleClickToDetail}>
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title}/>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
