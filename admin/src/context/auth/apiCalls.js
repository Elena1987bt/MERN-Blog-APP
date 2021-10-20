import axios from 'axios';
import { loginFailure, loginStart, loginSuccess } from './authActions';

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('http://127.0.0.1:8080/api/auth/login', user);
    res.data.result.isAdmin && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
