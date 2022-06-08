import * as types from '../actions/constants.js';

const initialState = {
  loggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        loggedIn: true,
      };
    case types.SIGNOUT:
      return {
        ...state,
        loggedIn: false,
      };

    default: {
      return state;
    }
  }
};

export default userReducer;