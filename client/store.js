import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    message: messageReducer,
    user: userReducer,
  },
})