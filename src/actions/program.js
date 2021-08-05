import axios from 'axios';

//Imports
import { BUDGET_AND_BENEFICIARIES, PROGRAM_ERROR, GET_PROGRAMS } from '../constants/types.js';
import {appConstants} from "../constants/environment.js"
import {tokenConfig} from "../helpers"
import {setError} from "./alert.js"

export const getBudgetAndBeneficiaries = () => async (dispatch, getState) => {
  axios.get(`${appConstants.REACT_APP_BASE_URL}/total_number_of_beneficiaries_and_budget/`, tokenConfig(getState)).then((res)=>{
    dispatch({type: BUDGET_AND_BENEFICIARIES, payload: res.data})
  }).catch((error)=>{
    dispatch(setError(error.response.data.message, error.response.status));
    dispatch({
    type: PROGRAM_ERROR,
  })}
  )}

  export const getPrograms = () => async (dispatch, getState) => {
    axios.get(`${appConstants.REACT_APP_BASE_URL}/programs/`, tokenConfig(getState)).then((res)=>{
      dispatch({type: GET_PROGRAMS, payload: res.data})
    }).catch((error)=>{
      dispatch(setError(error.response.data.message, error.response.status));
      dispatch({
      type: PROGRAM_ERROR,
    })}
    )}