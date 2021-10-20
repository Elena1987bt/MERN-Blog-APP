import React from 'react';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';

import './widgetSmListItem.css';

const widgetSmListItem = ({ user }) => {
  return (
    <li className="widgetSmListItem">
      <img
        src={
          user.profilePic ||
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmX1IYrleu5pZkTWvD6cBrp4E0knysir8f-A&usqp=CAU'
        }
        alt=""
        className="widgetSmImg"
      />
      <div className="widgetSmUser">
        <span className="widgetSmUsername">{user.name}</span>
        <span className="widgetSmUserTitle">{user.email}</span>
      </div>
      <Link to={{ pathname: `user/${user._id}`, user: user }} className="link">
        <button className="widgetSmButton">
          <VisibilityIcon className="widgetSmIcon" />
          Display
        </button>
      </Link>
    </li>
  );
};

export default widgetSmListItem;
