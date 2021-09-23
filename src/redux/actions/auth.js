import axios from 'axios';

import { 
  LOGIN_SUCCESS, 
  USER_LOADING, 
  USER_LOADED, 
  REGISTER_SUCCESS, 
  REGISTER_FAIL, 
  LOGIN_FAIL,
  LOGOUT_SUCCESS, 
  AUTH_ERROR, 
  VALIDATION_SUCCESS, 
  VALIDATION_ERROR ,
  FORGOT_PASSWORD
} from '../../constants/types';
import {appConstants} from "../../constants/environment"
import {toastify, tokenConfig} from "../../helpers"
import {setError} from "./alert.js"


// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  const id = localStorage.getItem("id")
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
      if(error.response.status===401){
        dispatch(setError("Unauthorized", error.response.status));
        dispatch({
          type: AUTH_ERROR,
        });
      }else{
        dispatch(setError(error.response.data.message, error.response.status));
        dispatch({
        type: AUTH_ERROR,
      });
      }
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
      if(error.response===""){
        dispatch(setError("Error Found", "ERR"));
        dispatch({ type: LOGIN_FAIL, payload: "Error Found" });
      }else if(error==="Network Error"){
        dispatch(setError("Network Error", "ERR"));
        dispatch({ type: LOGIN_FAIL, payload: "Network Error" });
      }else if(error.message && error.response === undefined){
        dispatch(setError(error.message, "ERR"));
        dispatch({ type: LOGIN_FAIL, payload: error.message });
      }else{
        dispatch(setError(error.response.data.message, 'ERR'));
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
      }
      
    });
};

// REGISTER USER 
export const register = (formData, history) => (dispatch) => {
  delete formData.organization
  delete formData.organizationType
  delete formData.password2

  dispatch({ type: USER_LOADING })
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  axios
    .post(`${appConstants.REACT_APP_BASE_URL}/user/`, formData, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      toastify.alertSuccess("Successfully created user. Please check your email for confirmation.")
      history.push("/login")
    })
    .catch((error) => {
      if(error.response===""){
        dispatch(setError("Error Found", "ERR"));
        dispatch({ type: REGISTER_FAIL, payload: "Error Found" });
      }else if(error==="Network Error"){
        dispatch(setError("Network Error", "ERR"));
        dispatch({ type: REGISTER_FAIL, payload: "Network Error" });
      }else if(error.message && error.response === undefined){
        dispatch(setError(error.message, "ERR"));
        dispatch({ type: REGISTER_FAIL, payload: error.message });
      }else{
        dispatch(setError(error.response.data, error.response.status));
        dispatch({
          type: REGISTER_FAIL,
          payload: error.response.data
        });
      }
    });
};

//VERIFY NEW USER TOKEN

export const verifyUser = (token) => async (dispatch) => {
  dispatch({ type: USER_LOADING })
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const value = {
    token: token,
  }
  axios
    .post(`${appConstants.REACT_APP_BASE_URL}/token_validation/`, value, config)
    .then((response) => {
      dispatch({ type: VALIDATION_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      if(error.response===""){
        dispatch(setError("Error Found", "ERR"));
        dispatch({ type: VALIDATION_ERROR, payload: "Error Found" });
      }else if(error==="Network Error"){
        dispatch(setError("Network Error", "ERR"));
        dispatch({ type: VALIDATION_ERROR, payload: "Network Error" });
      }else if(error.message && error.response === undefined){
        dispatch(setError(error.message, "ERR"));
        dispatch({ type: VALIDATION_ERROR, payload: error.message });
      }else{
        dispatch(setError(error.response.data.message.message, error.response.status));
        dispatch({ type: VALIDATION_ERROR, payload: error.response.data.message.message });
      }
    });
}

export const logout =(history)=> async (dispatch)=>{
  localStorage.clear()
  setTimeout(history.push(`/login`), 200);
  toastify.alertSuccess("You have logged out successfully")
  dispatch({ type: LOGOUT_SUCCESS });
}

export const forgotPassword=(email)=>dispatch=>{
  dispatch({ type: USER_LOADING })
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post(`${appConstants.REACT_APP_BASE_URL}/resettoken/`, email, config)
    .then((response) => {
      dispatch({ type: FORGOT_PASSWORD, payload: response.data });
      toastify.alertSuccess("Kindly check your mail")
    })
    .catch((error) => {
      if(error.response===""){
        dispatch(setError("Error Found", "ERR"));
        dispatch({ type: VALIDATION_ERROR, payload: "Error Found" });
      }else if(error==="Network Error"){
        dispatch(setError("Network Error", "ERR"));
        dispatch({ type: VALIDATION_ERROR, payload: "Network Error" });
      }else if(error.message && error.response === undefined){
        dispatch(setError(error.message, "ERR"));
        dispatch({ type: VALIDATION_ERROR, payload: error.message });
      }else{
        dispatch(setError(error.response.data.message, error.response.status));
        dispatch({ type: VALIDATION_ERROR, payload: error.response.data.message });
      }
    });

}