import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { useAuthContext } from './context/auth/authContext';

import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import User from './pages/user/User.jsx';
import UserList from './pages/userList/UserList.jsx';
import NewUser from './pages/newUser/NewUser.jsx';
import ProductList from './pages/productList/ProductList.jsx';
import Product from './pages/product/Product.jsx';
import NewProduct from './pages/newProduct/NewProduct.jsx';
import ListList from './pages/listList/ListList.jsx';
import List from './pages/list/List.jsx';
import NewList from './pages/newList/NewList.jsx';

import './App.css';

function App() {
  const { user } = useAuthContext();
  // console.log(user);
  return (
    <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        {user ? (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/movies">
                <ProductList />
              </Route>
              <Route path="/movie/:movieId">
                <Product />
              </Route>
              <Route path="/newMovie">
                <NewProduct />
              </Route>
              <Route path="/lists">
                <ListList />
              </Route>
              <Route path="/list/:listId">
                <List />
              </Route>
              <Route path="/newList">
                <NewList />
              </Route>
            </div>
          </>
        ) : (
          <Login />
        )}
      </Switch>
    </Router>
  );
}

export default App;
