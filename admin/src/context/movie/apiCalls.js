import { API } from '../../config.js';

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
    const res = await API.get('movie', {
      headers: {
        authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
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
    await API.delete(`movie/${id}`, {
      headers: {
        authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
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
    const res = await API.put(`movie/${id}`, movie, {
      headers: {
        authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    });

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
    const res = await API.post(`movie`, movie, {
      headers: {
        authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    });

    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(createMoviesFailure());
  }
};
