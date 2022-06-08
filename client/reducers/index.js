import { combineReducers } from "redux";
import userReducer from './userReducer.js';
import messageReducer from './messageReducer.js';

const reducers = combineReducers({
  messages: messageReducer,
  user: userReducer,
});


export default reducers;