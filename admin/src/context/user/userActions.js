// GET ALL USERS
export const userStart = () => ({
  type: 'USER_START',
});
export const userSuccess = (users) => ({
  type: 'USER_SUCCESS',
  payload: users,
});
export const userFailure = () => ({
  type: 'USER_FAILURE',
});

// GET SINGLE USER

// DELETE A USER
export const deleteUserStart = () => ({
  type: 'DELETE_USER_START',
});
export const deleteUserSuccess = (id) => ({
  type: 'DELETE_USER_SUCCESS',
  payload: id,
});
export const deleteUserFailure = () => ({
  type: 'DELETE_USER_FAILURE',
});
