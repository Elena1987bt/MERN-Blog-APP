import { API } from '../../config.js';
import { loginFailure, loginStart, loginSuccess } from './authActions';

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await API.post('auth/login', user);
    res.data.result.isAdmin && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
