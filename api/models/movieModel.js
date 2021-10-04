const mongoose = require('mongoose');

const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A movie must have a title'],
      unique: true,
    },
    desc: {
      type: String,
    },
    img: { type: String },
    imgTitle: { type: String },
    imgThumbnail: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    limit: { type: Number },
    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
