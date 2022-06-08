import * as types from '../actions/constants.js';

const initialState = {
  messages: [],
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NEW_MESSAGES:
      let newMessages = action.payload
      return {
        ...state,
        messages: [...newMessages],
      };

    default: {
      return state;
    }
  }
};

export default messageReducer;