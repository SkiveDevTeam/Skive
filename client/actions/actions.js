import * as types from './constants.js';

export const clientLogin = () => ({
    type: types.LOGIN,
});

export const clientSignout = () => ({
    type: types.SIGNOUT,
});

export const newMessages = () => ({
    type: types.NEW_MESSAGE,
})