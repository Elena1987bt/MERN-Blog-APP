import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';

import { getAllMovies, deleteMovie } from '../../context/movie/apiCalls';
import { useMoviesContext } from '../../context/movie/movieContext';
import './productList.css';

const ProductList = () => {
  const { movies, dispatch } = useMoviesContext();
  useEffect(() => {
    getAllMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
    {
      field: 'movie',
      headerName: 'Movie',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: 'genre', headerName: 'Genre', width: 120 },
    {
      field: 'year',
      headerName: 'Year',
      width: 120,
    },
    {
      field: 'limit',
      headerName: 'Limit',
      width: 120,
    },
    {
      field: 'isSeries',
      headerName: 'isSeries',
      width: 100,
    },

    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: '/movie/' + params.row._id, movie: params.row }}
            >
              <button className="productListEdit">Edit</button>
            </Link>

            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(row) => row._id}
      />
      {/* )} */}
    </div>
  );
};

export default ProductList;
