import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

function Details() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const movieGenres = useSelector((store) => store.movieGenres);
  const movieDetails = useSelector((store) => store.movieDetails);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  // useEffect to dispatch FetchMovieDetails
  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: id });
  }, []);

  // ***TODO***
  // useEffect to dispatch FETCH_GENRES
  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIE_GENRES', payload: id });
  }, []);

  // to go back to Home page (app.jsx)
  const handleClickHome = (event) => {
    event.preventDefault();
    history.push(`/`);
  };

  return (
    <main className="Details" key={id} data-testid="movieDetails">
      <h1>Movie Details!</h1>
      <section>
        <img src={movieDetails.poster} alt={movieDetails.title} />
        <h2 className='detail-title'>{movieDetails.title}</h2>
        <body className='detail-description'>{movieDetails.description}</body>
        <h3>Genre</h3>
        <div>
          {movieGenres.map((genre) => {
            return <p key={genre.id}>{genre.name}</p>;
          })}
        </div>
        <button onClick={handleClickHome} data-testid="toList">
          back to movies list
        </button>
      </section>
    </main>
  );
}

export default Details;
