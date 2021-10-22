import axios from 'axios';
export const API = axios.create({
  baseURL: 'https://netflix-mern-app.herokuapp.com/api/',
});
