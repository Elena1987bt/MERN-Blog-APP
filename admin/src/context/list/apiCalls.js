import { API } from '../../config.js';
import {
  getListStart,
  getListFailure,
  getListSuccess,
  deleteListStart,
  deleteListSuccess,
  deleteListFailure,
  updateListStart,
  updateListSuccess,
  updateListFailure,
  createListStart,
  createListSuccess,
  createListFailure,
} from './listActions';

export const getAllLists = async (dispatch) => {
  dispatch(getListStart());
  try {
    const res = await API.get('list', {
      headers: {
        authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    });
    dispatch(getListSuccess(res.data.list));
  } catch (err) {
    console.log(err);
    dispatch(getListFailure());
  }
};

export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await API.delete(`list/${id}`, {
      headers: {
        authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    console.log(err);
    dispatch(deleteListFailure());
  }
};
export const updateList = async (id, list, dispatch) => {
  dispatch(updateListStart());
  try {
    const res = await API.put(`list/${id}`, list, {
      headers: {
        authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    });

    dispatch(updateListSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(updateListFailure());
  }
};

// CREATE
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await API.post(`list`, list, {
      headers: {
        authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    });

    dispatch(createListSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(createListFailure());
  }
};
