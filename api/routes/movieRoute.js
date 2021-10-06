const express = require('express');
const router = express.Router();
const {
  getMovie,
  getAllMovies,
  getRandomMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} = require('../controllers/movieController');

const auth = require('../middleware/auth');

router.get('/', auth, getAllMovies);
router.get('/random', auth, getRandomMovie);
router.get('/find/:id', getMovie);
router.post('/', auth, createMovie);
router.put('/:id', auth, updateMovie);
router.delete('/:id', auth, deleteMovie);

module.exports = router;
