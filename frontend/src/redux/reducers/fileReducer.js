const initialState = {
    files: [],
    error: null,
  };
  
  const fileReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPLOAD_FILE_SUCCESS':
        return { ...state, files: [...state.files, action.payload], error: null };
      case 'UPLOAD_FILE_FAIL':
        return { ...state, error: action.payload };
      case 'GET_FILES_SUCCESS':
        return { ...state, files: action.payload, error: null };
      case 'GET_FILES_FAIL':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default fileReducer;
  