import { SET_ERROR, SET_ALERT} from '../constants/types.js';
import {toastify} from "../helpers"


// SET ALERT
export const setAlert = (msg) => {
  toastify.alertSuccess(`${msg.message}`, 1500)
  return {
    type: SET_ALERT,
    payload: msg,
  };
};

// SET ERRORS
export const setError = (msg, status) => {
  toastify.alertError(`Error: ${msg.message}, Status: ${status}`, 1500)
  return {
    type: SET_ERROR,
    payload: { msg, status },
  };
};
