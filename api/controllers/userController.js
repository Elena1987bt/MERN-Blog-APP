const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  const query = req.query.new;
  if (req.isAdmin) {
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find();
      const info = users.map((user) => {
        const { password, ...info } = user._doc;
        return info;
      });
      res.status(200).json({ users: info });
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Something went wrong', error: error.message });
    }
  } else {
    res.status(403).json('You are not allowed to see all users!');
  }
};

exports.getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    const { password, ...info } = user._doc;
    res.status(200).json({ user: info });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Something went wrong', error: error.message });
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
  if (req.userId === id || req.isAdmin) {
    try {
      await User.findByIdAndRemove(id);
      res.status(204).json({ user: null, message: 'User has been deleted!' });
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Something went wrong', error: error.message });
    }
  } else {
    res.status(403).json('You can update only your account');
  }
};
exports.getUserStats = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
