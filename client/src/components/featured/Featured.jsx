import { useState, useEffect } from 'react';
import { API } from '../../auth/apiCalls';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './featured.scss';

const Featured = ({ type, setGenre }) => {
  const [randomContent, setRandomContent] = useState({});
  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await API.get(`/movie/random?type=${type}`, {
          headers: {
            authorization:
              'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
          },
        });
        setRandomContent(res.data[0]);
      } catch (err) {
        console.log(err.message);
      }
    };
    getRandomContent();
  }, [type]);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Family">Family</option>
            <option value="Kids">Kids</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Sci-fi">Sci-fi</option>
            <option value="Thriller">Thriller</option>
            <option value="Drama">Drama</option>
            <option value="Documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={randomContent?.img} alt="" />
      <div className="info">
        {/* <img src={randomContent?.imgTitle} alt="" /> */}
        <p className="title">{randomContent?.title}</p>
        <span className="desc">{randomContent?.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
