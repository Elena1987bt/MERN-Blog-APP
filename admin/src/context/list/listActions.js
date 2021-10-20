// GET ALL MOVIES
export const getListStart = () => ({
  type: 'LIST_START',
});
export const getListSuccess = (lists) => ({
  type: 'LIST_SUCCESS',
  payload: lists,
});
export const getListFailure = () => ({
  type: 'LIST_FAILURE',
});

// GET SINGLE MOVIE

// DELETE A MOVIE
export const deleteListStart = () => ({
  type: 'DELETE_LIST_START',
});
export const deleteListSuccess = (id) => ({
  type: 'DELETE_LIST_SUCCESS',
  payload: id,
});
export const deleteListFailure = () => ({
  type: 'DELETE_LIST_FAILURE',
});

// DELETE A MOVIE
export const updateListStart = () => ({
  type: 'UPDATE_LIST_START',
});
export const updateListSuccess = (updatedList) => ({
  type: 'UPDATE_LIST_SUCCESS',
  payload: updatedList,
});
export const updateListFailure = () => ({
  type: 'UPDATE_LIST_FAILURE',
});

// CREATE A MOVIE
export const createListStart = () => ({
  type: 'CREATE_LIST_START',
});
export const createListSuccess = (newList) => ({
  type: 'CREATE_LIST_SUCCESS',
  payload: newList,
});
export const createListFailure = () => ({
  type: 'CREATE_LIST_FAILURE',
});
