import API from '../../services/api';

export const register = (formData) => async (dispatch) => {
  try {
    const { data } = await API.post('/auth/register', formData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAIL', payload: error.response.data });
  }
};

export const login = (formData) => async (dispatch) => {
  try {
    const { data } = await API.post('/auth/login', formData);
    localStorage.setItem('token', data.token);
    dispatch({ type: 'LOGIN_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAIL', payload: error.response.data });
  }
};
