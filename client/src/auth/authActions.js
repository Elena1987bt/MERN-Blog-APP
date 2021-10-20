export const loginStart = () => ({
  type: 'LOGIN_START',
});
export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});
export const loginFailure = () => ({
  type: 'LOGIN_FAILURE',
});
export const registerStart = () => ({
  type: 'REGISTER_START',
});
export const registerSuccess = (user) => ({
  type: 'REGISTER_SUCCESS',
  payload: user,
});
export const registerFailure = () => ({
  type: 'REGISTER_FAILURE',
});

//logout

export const logOut = () => ({
  type: 'LOGOUT',
});

// UPDATE USER ACCOUNT
export const updateAccountStart = () => ({
  type: 'UPDATE_ACCOUNT_START',
});
export const updateAccountSuccess = (user) => ({
  type: 'UPDATE_ACCOUNT_SUCCESS',
  payload: user,
});
export const updateAccountFailure = () => ({
  type: 'UPDATE_ACCOUNT_FAILURE',
});
