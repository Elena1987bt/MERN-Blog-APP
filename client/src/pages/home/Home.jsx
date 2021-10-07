import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import './home.scss';

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [gerne, setGerne] = useState(null);
  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `/list${type ? '?type=' + type : ''}${
            gerne ? '&gerne=' + gerne : ' '
          }`
          // {
          //   headers: {
          //     token:
          //       'Bearer ' +
          //       JSON.parse(localStorage.getItem('user')).accessToken,
          //   },
          // }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getRandomList();
  }, [gerne, type]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List key={list._id} list={list} />
      ))}
    </div>
  );
};

export default Home;
