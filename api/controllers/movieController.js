const mongoose = require('mongoose');
const Movie = require('../models/movieModel');

// CREATE
exports.createMovie = async (req, res) => {
  const movie = req.body;
  if (req.isAdmin) {
    try {
      const newMovie = await Movie.create(movie);
      newMovie.save();
      res.status(201).json(newMovie);
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Something went wrong', error: err.message });
    }
  } else {
    res
      .status(403)
      .json({ message: 'You are not allowed to perform this action' });
  }
};
// GET ALL MOVIES
exports.getAllMovies = async (req, res) => {
  if (req.isAdmin) {
    try {
      const movies = await Movie.find();
      res
        .status(200)
        .json({ results: movies.length, movies: movies.reverse() });
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Something went wrong', error: err.message });
    }
  } else {
    res
      .status(403)
      .json({ message: 'You are not allowed to perform this action' });
  }
};
// GET RANDOM MOVIE/SERIES
exports.getRandomMovie = async (req, res) => {
  const type = req.query.type; // series or movies
  let movie;
  try {
    if (type === 'series') {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } }, // get random series
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } }, // get random movie
      ]);
    }
    res.status(200).json(movie);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Something went wrong', error: err.message });
  }
};

// GET A MOVIE
exports.getMovie = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No movie with id: ${id}`);
    const movie = await Movie.findById(id);
    res.status(200).json(movie);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Something went wrong', error: err.message });
  }
};

// UPDATE
exports.updateMovie = async (req, res) => {
  const { id } = req.params;
  if (req.isAdmin) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No movie with id: ${id}`);
      const updatedMovie = await Movie.findByIdAndUpdate(
        id,
        { $set: req.body },
        {
          new: true,
        }
      );
      res.status(200).json(updatedMovie);
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Something went wrong', error: err.message });
    }
  } else {
    res
      .status(403)
      .json({ message: 'You are not allowed to perform this action' });
  }
};

// DELETE
exports.deleteMovie = async (req, res) => {
  const { id } = req.params;
  if (req.isAdmin) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No movie with id: ${id}`);
      await Movie.findByIdAndRemove(id);
      res.status(204).json({ movie: null, message: 'Movie has been deleted!' });
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Something went wrong', error: err.message });
    }
  } else {
    res
      .status(403)
      .json({ message: 'You are not allowed to perform this action' });
  }
};
