import * as types from './constants.js';

export const clientLogin = () => ({
    type: types.LOGIN,
});

export const clientSignout = () => ({
    type: types.SIGNOUT,
});

export const newMessages = (messages) => ({
    type: types.NEW_MESSAGES,
    payload: messages,
})