import { Route, HashRouter as Router } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/movies/:id">
          <Details />
        </Route>

        {/* Add Movie page */}
        <Route path="/addmovie">
          <AddMovie />
        </Route>

      </Router>
    </div>
  );
}

export default App;
