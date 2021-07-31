import { SET_ERROR, SET_ALERT, REMOVE_ALERT, CLEAR_ERROR } from '../constants/types.js';

// SET ALERT
export const setAlert = (msg) => {
  return {
    type: SET_ALERT,
    payload: msg,
  };
};

// SET ERRORS
export const setError = (msg, status) => {
  return {
    type: SET_ERROR,
    payload: { msg, status },
  };
};
