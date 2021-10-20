import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { updateAccount } from '../../auth/apiCalls';
import { logOut } from '../../auth/authActions';
import { useAuthContext } from '../../auth/authContext';
import './settings.scss';

const Settings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [img, setImg] = useState(null);
  const { user, dispatch } = useAuthContext();
  const history = useHistory();
  // console.log(user);

  const handleUpdate = (e) => {
    e.preventDefault();
    const id = user?.result?._id;
    const updatedUser = {};
    if (email) {
      updatedUser.email = email;
    }
    if (password) {
      updatedUser.password = password;
    }
    if (username) {
      updatedUser.username = username;
    }

    updateAccount(id, updatedUser, dispatch);
    history.push('/');
  };
  return (
    <div className="settings">
      <div className="top">
        <div className="wrapper">
          <Link to="/" className="link logOutLink">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
          </Link>
          <Link to="/" className="link logOutLink">
            <button className="logOutBtn" onClick={() => dispatch(logOut())}>
              Log Out
            </button>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="settings-center">
          <div className="settings-centerLeft">
            <h3>Your details</h3>
            <div className="settings-centerLeftItem">
              <img src={user?.result?.img ? user.result.img : ''} alt="" />
            </div>
            <div className="settings-centerLeftItem">
              <span>Username: </span>
              <span>{user?.result?.username} </span>
            </div>
            <div className="settings-centerLeftItem">
              <span>Email: </span>
              <span>{user?.result?.email} </span>
            </div>
          </div>
          <div className="settings-centerRight">
            <h3>Update Your Account</h3>
            <div className="settings-centerRightItem">
              <label>Username</label>
              <input
                type="Username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="settings-centerRightItem">
              <label>Email</label>
              <input
                type="email"
                // placeholder="Email or phone number"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="settings-centerRightItem">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="settings-centerRightItem">
              <label>Change Profile Picture</label>
              <input
                type="file"
                id="img"
                name="img"
                className="imgInput"
                onChange={(e) => setImg(e.target.files[0])}
              />
            </div>
            <button className="button" type="submit" onClick={handleUpdate}>
              Update Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Settings;
