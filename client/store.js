import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './reducers/messageReducer.js';
import userReducer from './reducers/userReducer.js';
import reducers from './reducers/index.js';

const store = configureStore({
  reducer: {
    reducers,
  },
})

export default store;