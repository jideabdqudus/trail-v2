import axios from "axios";

import {
  CREATE_FORM_SUCCESS,
  FORMS_SUCCESS,
  FORM_ERROR,
  DELETE_FORM,
  FORM_LOADING,
  FILTER_FORM,
  CLEAR_FILTER,
} from "../constants/types";
import { appConstants } from "../constants/environment.js";
import { tokenConfig } from "../helpers";
import { setError } from "./alert";

export const getForms = (page) => (dispatch, getState) => {
  dispatch({
    type: FORM_LOADING,
  });

  axios
    .get(`${appConstants.REACT_APP_BASE_URL}/form?page=${page}&pageBy=10`, tokenConfig(getState))
    .then((response) => {
      dispatch({
        type: FORMS_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      if (error.message && error.response === undefined) {
        dispatch(setError(error.message, "ERR"));
        dispatch({
          type: FORM_ERROR,
          payload: error.message,
        });
      } else {
        dispatch(setError(error.response.data.message, error.response.status));
        dispatch({
          type: FORM_ERROR,
          payload: error.response.data.message,
        });
      }
    });
};

export const filterForm=(forms)=>dispatch=>{
  dispatch({
    type: FILTER_FORM,
    payload: forms
  })
}

export const clearFilter=()=>dispatch=>{
  dispatch({
    type: CLEAR_FILTER,
  })
}


