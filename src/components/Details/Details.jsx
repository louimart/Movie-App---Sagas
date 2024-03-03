import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

function Details() {
  const dispatch = useDispatch();
  let { id } = useParams();
  // useSelector to access the MovieDetails Reducer
  // const movies = useSelector((store) => store.moviesDetails);
  console.log('movie', movies.id);
  console.log('selected id', id);

  // useEffect to dispatch FetchMovieDetails
  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES_DETAILS' });
  }, []);

  return (
    <div className="Details" key={id}>
      <h1>Movie Details! {JSON.stringify(id)}</h1>
    </div>
  );
}

export default Details;
