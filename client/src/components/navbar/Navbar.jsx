import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { useAuthContext } from '../../auth/authContext';
import { logOut } from '../../auth/authActions';
import './navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, dispatch } = useAuthContext();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />

          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/series" className="link">
            Series
          </Link>
          <Link to="/movies" className="link">
            Movies
          </Link>
          <Link to="/" className="link">
            Popular
          </Link>
          <Link to="/" className="link">
            My&nbsp;List
          </Link>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>KID</span>
          <NotificationsIcon className="icon" />
          <Link to="/profile" className="link">
            <Avatar alt="" src={user?.result?.profilePic} />
          </Link>
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <Link to="/profile" className="link">
                <span>Settings</span>
              </Link>
              <span onClick={() => dispatch(logOut())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
