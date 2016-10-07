import { combineReducers } from 'redux';
import post from './postReducer';
import profile from './profileReducer';

const root = combineReducers({
  post,
  profile,
})

export default root;
