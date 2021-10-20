import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { updateList } from '../../context/list/apiCalls';
import { useListContext } from '../../context/list/listContext';
import './list.css';

const List = () => {
  const [updatedList, setUpdatedList] = useState(null);
  const { dispatch } = useListContext();
  const location = useLocation();
  const list = location.list;

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdatedList({ ...updatedList, [e.target.name]: value });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    updateList(list._id, updatedList, dispatch);
  };
  console.log(updatedList);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newList">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{list.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">ID:</span>
              <span className="productInfoValue"> {list._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Genre:</span>
              <span className="productInfoValue">{list.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Type:</span>
              <span className="productInfoValue">{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>List Name</label>
            <input
              type="text"
              placeholder={list.title}
              name="title"
              onChange={handleChange}
            />
            <label>Type</label>
            <input
              type="text"
              placeholder={list.type}
              name="type"
              onChange={handleChange}
            />
            <label>Genre</label>
            <input
              type="text"
              placeholder={list.genre}
              name="genre"
              onChange={handleChange}
            />
          </div>
          <div className="productFormRight">
            <button className="productButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default List;
