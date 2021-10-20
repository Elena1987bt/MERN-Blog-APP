import { useState, useEffect, useMemo } from 'react';
import Chart from '../../components/chart/Chart';
import axios from 'axios';

import { useAuthContext } from '../../context/auth/authContext';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import './home.css';

const Home = () => {
  const { user } = useAuthContext();
  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );
  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get('/user/stats', {
          headers: {
            token: 'Bearer ' + user.token,
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], 'New User': item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS, user.token]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart title="User Analytics" dataKey="New User" data={userStats} grid />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
