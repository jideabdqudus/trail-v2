import axios from 'axios';

//Imports
import { LOGIN_SUCCESS, USER_LOADING, USER_LOADED, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_FAIL, AUTH_ERROR, VALIDATION_SUCCESS, VALIDATION_ERROR } from '../constants/types.js';
import {appConstants} from "../constants/environment.js"
import {tokenConfig} from "../helpers"
import {setError} from "./alert.js"


// CHECK TOKEN & LOAD USER
export const loadUser = (id) => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });
  axios
    .get(`${appConstants.REACT_APP_BASE_URL}/user/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch(setError(error.response.data, error.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// LOGIN USER 
export const loginUser = (profile) => async (dispatch) => {
  dispatch({ type: USER_LOADING })
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post(`${appConstants.REACT_APP_BASE_URL}/authenticate/`, profile, config)
    .then((response) => {
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      console.log(error)
      dispatch(setError(error.response.data, error.response.status));
      dispatch({ type: LOGIN_FAIL, payload: error.response });
    });
};

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
    .catch((error) => {
      dispatch(setError(error.response.data, error.response.status));
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

//VERIFY NEW USER TOKEN

export const verifyUser = (token) => async (dispatch) => {
  // User Loading
  dispatch({ type: USER_LOADING })
  const value = {
      token: token,
  }
  // Headers
  const config = {
      headers: {
          'Content-Type': 'application/json',
      },
  }
  axios
      .post(
          `${appConstants.REACT_APP_BASE_URL}/token_validation/`,
          value,
          config
      )
      .then((res) => {
          dispatch({
              type: VALIDATION_SUCCESS,
              payload: res.data,
          })
      })
      .catch((error) => {
      dispatch(setError(error.response.data, error.response.status));
          dispatch({
              type: VALIDATION_ERROR,
              payload: error.response.data,
          })
      })
}