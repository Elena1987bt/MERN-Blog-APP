import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';

import { getAllLists, deleteList } from '../../context/list/apiCalls';
import { useListContext } from '../../context/list/listContext';
import './listList.css';

const ListList = () => {
  const { lists, dispatch } = useListContext();
  console.log(lists);
  useEffect(() => {
    getAllLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteList(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 250 },
    {
      field: 'title',
      headerName: 'List Title',
      width: 250,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.title}</div>;
      },
    },
    { field: 'genre', headerName: 'Genre', width: 150 },
    {
      field: 'type',
      headerName: 'Type',
      width: 150,
    },

    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: '/list/' + params.row._id, list: params.row }}
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
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default ListList;
