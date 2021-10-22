import { API } from '../../config.js';
import {
  userStart,
  userFailure,
  userSuccess,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} from './userActions';

export const getAllUsers = async (dispatch) => {
  dispatch(userStart());
  try {
    const res = await API.get('user', {
      headers: {
        authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    });
    dispatch(userSuccess(res?.data?.users));
  } catch (err) {
    dispatch(userFailure());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await API.delete(`user/${id}`, {
      headers: {
        authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    });
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    console.log(err);
    dispatch(deleteUserFailure());
  }
};
