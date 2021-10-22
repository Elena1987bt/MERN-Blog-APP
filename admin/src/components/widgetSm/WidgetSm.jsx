import { useState, useEffect } from 'react';
import { API } from '../../config.js';

import WidgetSmListItem from './widgetSmListItem/WidgetSmListItem';
import { useAuthContext } from '../../context/auth/authContext';
import './widgetSm.css';

const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await API.get('/user?new=5', {
          headers: {
            authorization: 'Bearer ' + user.token,
          },
        });
        setNewUsers(res.data.users);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, [user.token]);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <WidgetSmListItem key={user._id} user={user} />
        ))}
      </ul>
    </div>
  );
};
export default WidgetSm;
