import { SET_ERROR, SET_ALERT} from '../../constants/types.js';
import {toastify} from "../../helpers"

// SET ALERT
export const setAlert = (msg) => {
  toastify.alertSuccess(`${msg.message}`, 2000)
  return {
    type: SET_ALERT,
    payload: msg,
  };
};

// SET ERRORS
export const setError = (msg, status) => {
  if(msg){
    toastify.alertError(`Error: ${msg.message? msg.message : msg}`, 3000)
  }else{
    toastify.alertError("Error Found", 1500)
  }  
  return {
    type: SET_ERROR,
    payload: { msg, status },
  };
};
