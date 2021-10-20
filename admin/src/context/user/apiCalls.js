import axios from 'axios';
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
    const res = await axios.get('http://127.0.0.1:8080/api/user', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
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
    await axios.delete(`http://127.0.0.1:8080/api/user/${id}`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    });
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    console.log(err);
    dispatch(deleteUserFailure());
  }
};
