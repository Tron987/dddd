const initialState = {
    user: null,
    token: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_SUCCESS':
        return { ...state, user: action.payload, error: null };
      case 'REGISTER_FAIL':
        return { ...state, error: action.payload };
      case 'LOGIN_SUCCESS':
        return { ...state, token: action.payload.token, error: null };
      case 'LOGIN_FAIL':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default authReducer;
  