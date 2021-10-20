const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'REGISTER_START':
      return {
        user: null,
        isFetching: true,
        error: false,
        updatedUser: null,
      };
    case 'REGISTER_SUCCESS':
      return {
        user: action.payload,
        isFetching: false,
        error: false,
        updatedUser: null,
      };
    case 'REGISTER_FAILURE':
      return {
        user: null,
        isFetching: false,
        error: true,
        updatedUser: null,
      };
    case 'LOGIN_START':
      return {
        user: null,
        isFetching: true,
        error: false,
        updatedUser: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        isFetching: false,
        error: false,
        updatedUser: null,
      };
    case 'LOGIN_FAILURE':
      return {
        user: null,
        isFetching: false,
        error: true,
        updatedUser: null,
      };
    case 'UPDATE_ACCOUNT_START':
      return {
        ...state,
        isFetching: true,
      };
    case 'UPDATE_ACCOUNT_SUCCESS':
      return {
        user: action.payload,
        isFetching: false,
        error: true,
        updatedUser: action.payload,
      };
    case 'UPDATE_ACCOUNT_FAILURE':
      return {
        ...state,
        error: true,
      };
    case 'LOGOUT':
      return {
        user: null,
        isFetching: false,
        error: false,
        updatedUser: null,
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
