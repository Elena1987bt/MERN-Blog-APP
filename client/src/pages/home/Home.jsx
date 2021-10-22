import { useState, useEffect } from 'react';
import { API } from '../../auth/apiCalls';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import './home.scss';

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await API.get(
          `/list${type ? '?type=' + type : ''}${
            genre ? '&genre=' + genre : ' '
          }`,
          {
            headers: {
              authorization:
                'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
            },
          }
        );
        setLists(res.data.list);
      } catch (err) {
        console.log(err.message);
      }
    };
    getRandomList();
  }, [genre, type]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List key={list._id} list={list} />
      ))}
    </div>
  );
};

export default Home;
