import { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import PublishIcon from '@mui/icons-material/Publish';

import { updateMovie } from '../../context/movie/apiCalls';
import { useMoviesContext } from '../../context/movie/movieContext';
import './product.css';

const Product = () => {
  const [updatedMovie, setUpdatedMovie] = useState(null);
  const { dispatch } = useMoviesContext();
  const location = useLocation();
  const movie = location.movie;
  const history = useHistory();

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdatedMovie({ ...updatedMovie, [e.target.name]: value });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    updateMovie(movie._id, updatedMovie, dispatch);
    history.push('/movies');
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newMovie">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <img src={movie.img} className="productTopLeft__img" alt="" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie.img} alt="" className="productInfoImg" />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem desc">
              <span className="productInfoKey">ID:</span>
              <span className="productInfoValue"> {movie._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Genre:</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Year:</span>
              <span className="productInfoValue">{movie.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Limit:</span>
              <span className="productInfoValue">{movie.limit}+</span>
            </div>
            <div className="productInfoItem desc">
              <span className="productInfoKey">Description:</span>
              <span className="productInfoValue">{movie.desc}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Name</label>
            <input
              type="text"
              placeholder={movie?.title}
              name="title"
              onChange={handleChange}
            />
            <label>Movie Description</label>
            <textarea
              type="text"
              placeholder=""
              name="desc"
              rows="4"
              columns="50"
              onChange={handleChange}
            />
            <label>Year</label>
            <input
              type="text"
              placeholder={movie.year}
              name="year"
              onChange={handleChange}
            />
            <label>Genre</label>
            <input
              type="text"
              placeholder={movie.genre}
              name="genre"
              onChange={handleChange}
            />
            <label>Limit</label>
            <input
              type="text"
              placeholder={movie.limit + '+'}
              name="limit"
              onChange={handleChange}
            />
            <label>Trailer</label>
            <input type="file" placeholder={movie.trailer} />
            <label>Video</label>
            <input type="file" placeholder={movie.video} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={movie.img} alt="" className="productUploadImg" />
              <label htmlFor="file">
                <PublishIcon />
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            <button className="productButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
