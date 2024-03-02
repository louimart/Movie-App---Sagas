import { Route, HashRouter as Router } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';

function Details({movieItem, index}) {

  return (
    <div className="Details">
      <h1>Movie Details!</h1>
      <p>Hello</p>
      <p>{movieItem}</p>
      <p>{index}</p>
    </div>
  );
}

export default Details;