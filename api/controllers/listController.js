const mongoose = require('mongoose');
const List = require('../models/listModel');

// CREATE
exports.createList = async (req, res) => {
  const list = req.body;
  if (req.isAdmin) {
    try {
      const newList = await List.create(list);
      newList.save();
      res.status(201).json(newList);
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

// GET ALL LISTS
exports.getAllLists = async (req, res) => {
  const typeQuery = req.query.type; // either movie or series
  const genreQuery = req.query.genre; // either comedy, crime, romance, horror, etc
  let list = [];

  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } },
        ]);
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }]);
    }

    res.status(200).json({ result: list.length, list: list });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Something went wrong', error: err.message });
  }
};

//DELETE
exports.deleteList = async (req, res) => {
  const { id } = req.params;
  if (req.isAdmin) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No list with id: ${id}`);
      await List.findByIdAndRemove(id);
      res
        .status(204)
        .json({ list: null, message: 'List has been deleted successfully' });
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

// UPDATE
exports.updateList = async (req, res) => {
  const { id } = req.params;
  if (req.isAdmin) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No list with id: ${id}`);
      const updatedList = await List.findByIdAndUpdate(
        id,
        { $set: req.body },
        {
          new: true,
        }
      );
      res.status(200).json(updatedList);
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
