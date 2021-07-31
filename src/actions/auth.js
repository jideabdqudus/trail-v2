import axios from 'axios';

//Imports
import { LOGIN_SUCCESS, USER_LOADING, USER_LOADED, REGISTER_SUCCESS, REGISTER_FAIL } from '../constants/types.js';
import {appConstants} from "../constants/environment.js"
import {tokenConfig} from "../helpers"



// REGISTER USER
export const register = (payload) => (dispatch) => {
  dispatch({ type: USER_LOADING })

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  axios
    .post(`${appConstants.REACT_APP_BASE_URL}/user/`, payload, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};