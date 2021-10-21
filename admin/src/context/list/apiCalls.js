import axios from 'axios';
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
    const res = await axios.get('http://127.0.0.1:8080/api/list', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
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
    await axios.delete(`http://127.0.0.1:8080/api/list/${id}`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
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
    const res = await axios.put(`http://127.0.0.1:8080/api/list/${id}`, list, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
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
    const res = await axios.post(`http://127.0.0.1:8080/api/list`, list, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    });

    dispatch(createListSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(createListFailure());
  }
};
