import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; // Correct import for default export
import authReducer from './redux/reducers/authReducer';
import fileReducer from './redux/reducers/fileReducer';

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  files: fileReducer,
});

// Create store with middleware and dev tools
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) // Use thunk as middleware
);

export default store;
