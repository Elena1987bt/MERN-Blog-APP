import axios from 'axios';
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
  updateAccountStart,
  updateAccountSuccess,
  updateAccountFailure,
} from './authActions';

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('http://127.0.0.1:8080/api/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const register = async (user, dispatch) => {
  dispatch(registerStart());
  try {
    const res = await axios.post(
      'http://127.0.0.1:8080/api/auth/register',
      user
    );

    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

export const updateAccount = async (id, user, dispatch) => {
  dispatch(updateAccountStart());
  try {
    const res = await axios.put(`http://127.0.0.1:8080/api/user/${id}`, user, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    });
    console.log(res.data);
    dispatch(updateAccountSuccess(res.data));
  } catch (err) {
    dispatch(updateAccountFailure());
  }
};
