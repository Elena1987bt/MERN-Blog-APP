import axios from 'axios';
import {
  getMoviesStart,
  getMoviesFailure,
  getMoviesSuccess,
  deleteMoviesStart,
  deleteMovieSuccess,
  deleteMoviesFailure,
  updateMoviesStart,
  updateMovieSuccess,
  updateMoviesFailure,
  createMoviesStart,
  createMovieSuccess,
  createMoviesFailure,
} from './movieActions';

export const getAllMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get('http://127.0.0.1:8080/api/movie', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    });
    dispatch(getMoviesSuccess(res.data.movies));
  } catch (err) {
    console.log(err);
    dispatch(getMoviesFailure());
  }
};

export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMoviesStart());
  try {
    await axios.delete(`http://127.0.0.1:8080/api/movie/${id}`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    console.log(err);
    dispatch(deleteMoviesFailure());
  }
};
export const updateMovie = async (id, movie, dispatch) => {
  dispatch(updateMoviesStart());
  try {
    const res = await axios.put(
      `http://127.0.0.1:8080/api/movie/${id}`,
      movie,
      {
        headers: {
          token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
        },
      }
    );

    dispatch(updateMovieSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(updateMoviesFailure());
  }
};

// CREATE
export const createMovie = async (movie, dispatch) => {
  dispatch(createMoviesStart());
  try {
    const res = await axios.post(`http://127.0.0.1:8080/api/movie`, movie, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    });

    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(createMoviesFailure());
  }
};
