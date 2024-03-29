import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
  // Add listener for FETCH_MOVIE_DETAILS from Details.jsx
  yield takeEvery('FETCH_MOVIE_DETAILS', fetchMovieDetails);
  yield takeEvery('FETCH_MOVIE_GENRES', fetchMovieGenres);
}

function* fetchAllMovies() {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get('/api/movies');
    // Set the value of the movies reducer:
    yield put({
      type: 'SET_MOVIES',
      payload: moviesResponse.data,
    });
  } catch (error) {
    console.log('fetchAllMovies error:', error);
  }
}

// create saga for fetchMovieDetails
// make axios request /api/movies/:id
// // yield put "set movie details"
function* fetchMovieDetails(action) {
  try {
    // Get the movie details
    const movieDetailsResponse = yield axios.get(
      `/api/movies/${action.payload}`
    );
    // set the value of the movieDetails reducer
    yield put({
      type: 'SET_MOVIE_DETAILS',
      payload: movieDetailsResponse.data[0], // [0] pulls the response data obj out of array to access properties off of reducer.
    });
  } catch (error) {
    console.log('fetchMovieDetails error', error);
  }
}

// ***TODO***
// saga to FETCH_MOVIE_GENRES
function* fetchMovieGenres(action) {
  try {
    const movieGenresResponse = yield axios.get(
      `/api/genres/${action.payload}`
    );
    yield put({
      type: 'SET_MOVIE_GENRES',
      payload: movieGenresResponse.data,
    });
  } catch (error) {
    console.log('fetchMovieGenres error', error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie details
const movieDetails = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIE_DETAILS':
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genre details
const movieGenres = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIE_GENRES':
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    movieDetails,
    movieGenres,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
