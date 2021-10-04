const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

exports.getUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No user with id: ${id}`);

    const user = await User.findById(id);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  if (req.userId === id || req.isAdmin) {
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 12);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { $set: req.body },
        {
          new: true,
        }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Something went wrong', error: error.message });
    }
  } else {
    res.status(403).json('You can update only your account');
  }
};
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No user with id: ${id}`);

    await User.findByIdAndRemove(id);
    res.status(204).json(null);
  } catch (err) {
    console.log(err);
  }
};
exports.getUserStats = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
