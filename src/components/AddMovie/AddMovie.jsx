// useHistory for routing to from page onClick
import { useHistory } from 'react-router-dom';

function AddMovie() {
  return (
    <>
      <h1>Add a Movie</h1>
      <form>
        <input id="add-movie" placeholder="title" type="text" />
        <input id="add-movie" placeholder="movie poster image URL" type="text" />
        <input id="add-movie" placeholder="movie description" type="text" />
        <input id="add-movie" placeholder="genre" type="text" />
      </form>
    </>
  );
}

export default AddMovie;

// - an input field (for the movie poster image URL)
// - a textarea (for the movie description)
// - a dropdown (to choose a **single** genres)