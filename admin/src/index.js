import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { AuthContextProvider } from './context/auth/authContext';
import { UserContextProvider } from './context/user/userContext';
import { MoviesContextProvider } from './context/movie/movieContext';
import { ListContextProvider } from './context/list/listContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserContextProvider>
        <MoviesContextProvider>
          <ListContextProvider>
            <App />
          </ListContextProvider>
        </MoviesContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
