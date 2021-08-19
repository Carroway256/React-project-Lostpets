import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import adReducer from "./adReducer";
export default combineReducers({
  auth: authReducer,
  form: formReducer,
  ads: adReducer
});
