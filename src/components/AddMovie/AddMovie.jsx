// useHistory for routing to from page onClick
import { useHistory } from 'react-router-dom';

function AddMovie() {
  return (
    <form>
      <h1>Add a Movie</h1>
      <section>
        <label for="title">
          Title: <input id="title" placeholder="title" type="text" />
        </label>
        <br/>
        <label for="image-url">
          Movie Poster Image URL: <input id="image-url" placeholder="movie poster image URL" type="text" />
        </label>
        <br/>
        <label for="description">
          Movie Description: <textarea name="description" id="description" placeholder="description"></textarea>
        </label>
      </section>
      <section>
        <label for="genres">
          <span>Genres: </span>
        </label>
        <select id="genres">
          <option value="Adventure">Adventure</option>
          <option value="Animated">Animated</option>
          <option value="Biographical">Biographical</option>
          <option value="Comedy">Comedy</option>
          <option value="Disaster">Disaster</option>
          <option value="Drama">Drama</option>
          <option value="Epic">Epic</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Musical">Musical</option>
          <option value="Romantic">Romantic</option>
          <option value="Science-Fiction">Science Fiction</option>
          <option value="Space-Opera">Space-Opera</option>
          <option value="Superhero">Superhero</option>
        </select>
      </section>
      <section>
        <button type="submit" id="add-movie-btn">Submit</button>
      </section>
    </form>
  );
}

export default AddMovie;
