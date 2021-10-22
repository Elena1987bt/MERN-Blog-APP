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

export const API = axios.create({
  baseURL: 'https://netflix-mern-app.herokuapp.com/api/',
});
export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await API.post('auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const register = async (user, dispatch) => {
  dispatch(registerStart());
  try {
    const res = await API.post('auth/register', user);

    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

export const updateAccount = async (id, user, dispatch) => {
  dispatch(updateAccountStart());
  try {
    const res = await API.put(`user/${id}`, user, {
      headers: {
        authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
      },
    });

    dispatch(updateAccountSuccess(res.data));
  } catch (err) {
    dispatch(updateAccountFailure());
  }
};
