const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // all genres for specific movie
  const sqlText = `
  SELECT "movies".id, "genres".name FROM "movies_genres"
  JOIN "genres" ON "movies_genres".genre_id="genres".id
  JOIN "movies" ON "movies_genres".movie_id="movies".id
  WHERE "movies".id = $1
  `;
  const sqlValue = [req.params.id];

  pool.query(sqlText, sqlValue)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })
});

module.exports = router;