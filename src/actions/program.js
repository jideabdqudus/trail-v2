import axios from 'axios';

import {
  CREATED_PROGRAM, 
  BUDGET_AND_BENEFICIARIES, 
  PROGRAM_ERROR, 
  GET_PROGRAMS, 
  GET_ALL_SDGS_INDICATORS, 
  LOADING_PROGRAMS, 
  GET_INDICATORS_UNDER_SDGS ,
  FORM_REPORT_FOR_PROGRAM,
  CLEAR_REPORT
} from '../constants/types.js';
import {appConstants} from "../constants/environment.js"
import {tokenConfig, toastify} from "../helpers"
import {setError} from "./alert.js"


export const getBudgetAndBeneficiaries = () => async (dispatch, getState) => {
  dispatch({type: LOADING_PROGRAMS})
  axios.get(`${appConstants.REACT_APP_BASE_URL}/total_number_of_beneficiaries_and_budget/`, tokenConfig(getState)).then((res)=>{
    dispatch({type: BUDGET_AND_BENEFICIARIES, payload: res.data})
  }).catch((error)=>{
    if(error.message && error.response === undefined){
      dispatch(setError(error.message, "ERR"));
      dispatch({
      type: PROGRAM_ERROR,
      payload: error.message
    })
  }else{
    dispatch(setError(error.response.data.message, error.response.status));
    dispatch({
    type: PROGRAM_ERROR,
    payload: error.response.data.message
  })
  }
}
)}

export const getPrograms = () => async (dispatch, getState) => {
  axios.get(`${appConstants.REACT_APP_BASE_URL}/programs/`, tokenConfig(getState)).then((res)=>{
    dispatch({type: GET_PROGRAMS, payload: res.data})
  }).catch((error)=>{
    if(error.message && error.response === undefined){
        dispatch(setError(error.message, "ERR"));
        dispatch({
        type: PROGRAM_ERROR,
        payload: error.message
      })
    }else{
      dispatch(setError(error.response.data.message, error.response.status));
      dispatch({
      type: PROGRAM_ERROR,
      payload: error.response.data.message
    })
    }
}
)}

export const getAllSdgsAndIndicators = () => async (dispatch, getState) => {
  //#TODO: Add Preloader here
  dispatch({ type: LOADING_PROGRAMS });
  axios.get(`${appConstants.REACT_APP_BASE_URL}/sdgs/all/indicators/`, tokenConfig(getState)).then((res)=>{
    dispatch({type: GET_ALL_SDGS_INDICATORS, payload: res.data})
  }).catch((error)=>{
    if(error.message && error.response === undefined){
      dispatch(setError(error.message, "ERR"));
      dispatch({
      type: PROGRAM_ERROR,
      payload: error.message
    })
  }else{
    dispatch(setError(error.response.data.message, error.response.status));
    dispatch({
    type: PROGRAM_ERROR,
    payload: error.response.data.message
  })
  }
}
)}

export const getIndicatorsUnderSdgs = (id) => async (dispatch, getState) => {
  //#TODO: Add Preloader here
  dispatch({ type: LOADING_PROGRAMS });
  axios.get(`${appConstants.REACT_APP_BASE_URL}/sdgs/${id}/indicators/`, tokenConfig(getState)).then((res)=>{
    dispatch({type: GET_INDICATORS_UNDER_SDGS, payload: res.data})
  }).catch((error)=>{
    if(error.message && error.response === undefined){
      dispatch(setError(error.message, "ERR"));
      dispatch({
      type: PROGRAM_ERROR,
      payload: error.message
    })
  }else{
    dispatch(setError(error.response.data.message, error.response.status));
    dispatch({
    type: PROGRAM_ERROR,
    payload: error.response.data.message
  })
  }
}
)}

export const createProgram = (submissionPayload, history) => async (dispatch, getState) => {
    //#TODO: Add Preloader here
    dispatch({ type: LOADING_PROGRAMS });
    axios.post(`${appConstants.REACT_APP_BASE_URL}/programs/`, submissionPayload, tokenConfig(getState)
    ).then((res)=>{
      toastify.alertSuccess("Program created successfully.")
      dispatch({type: CREATED_PROGRAM, payload: res.data})
      setTimeout(history.push(`/app/programs`), 7000);
    }).catch((error)=>{
      if(error.message && error.response === undefined){
        dispatch(setError(error.message, "ERR"));
        dispatch({
        type: PROGRAM_ERROR,
        payload: error.message
      })
    }else{
      dispatch(setError(error.response.data.message, error.response.status));
      dispatch({
      type: PROGRAM_ERROR,
      payload: error.response.data.message
    })
    }
  })
}

export const deleteProgram = (id) => async (dispatch, getState) =>{
    dispatch ({type: LOADING_PROGRAMS});
    axios.delete(`${appConstants.REACT_APP_BASE_URL}/programs/${id}/`, tokenConfig(getState)
    ).then((res)=>{
      toastify.alertSuccess("Successfully deleted program")
      dispatch(getPrograms())
    }).catch((error)=>{
      if(error.message && error.response === undefined){
        dispatch(setError(error.message, "ERR"));
        dispatch({
        type: PROGRAM_ERROR,
        payload: error.message
      })
    }else{
      dispatch(setError(error.response.data.message, error.response.status));
      dispatch({
      type: PROGRAM_ERROR,
      payload: error.response.data.message
    })
    }
  })
}



export const getFormReportforProgram = (id, path) => async (dispatch, getState) => {
  //#TODO: Add Preloader here
  console.log("ernter")
  dispatch({ type: LOADING_PROGRAMS });
  axios.get(`${appConstants.REACT_APP_BASE_URL}/program_report/${id}/${path}`, tokenConfig(getState)
  ).then((res)=>{
    console.log(res)
    dispatch({type: FORM_REPORT_FOR_PROGRAM, payload: res.data})
  }).catch((error)=>{
    console.error(error)
    if(error.message && error.response === undefined){
      dispatch(setError(error.message, "ERR"));
      dispatch({
      type: PROGRAM_ERROR,
      payload: error.message
    })
  }else{
    dispatch(setError(error.response.data.message, error.response.status));
    dispatch({
    type: PROGRAM_ERROR,
    payload: error.response.data.message
  })
  }
})
}

export const clearReport = () => (dispatch)=>{
  dispatch({type: CLEAR_REPORT})
}