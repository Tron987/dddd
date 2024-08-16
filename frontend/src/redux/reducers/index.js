import { combineReducers } from 'redux';
import authReducer from './authReducer';
import fileReducer from './fileReducer';

export default combineReducers({
  auth: authReducer,
  files: fileReducer,
});
