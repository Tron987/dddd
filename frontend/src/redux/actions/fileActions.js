import API from '../../services/api';

export const uploadFile = (fileData) => async (dispatch) => {
  try {
    const { data } = await API.post('/files/upload', fileData);
    dispatch({ type: 'UPLOAD_FILE_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'UPLOAD_FILE_FAIL', payload: error.response.data });
  }
};

export const getFiles = () => async (dispatch) => {
  try {
    const { data } = await API.get('/files');
    dispatch({ type: 'GET_FILES_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'GET_FILES_FAIL', payload: error.response.data });
  }
};
