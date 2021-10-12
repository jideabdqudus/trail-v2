import axios from "axios";

import { appConstants } from "../../constants/environment.js";
import { tokenConfig } from "../../helpers";
import { setError, setAlert } from "./alert";
import { FORMS_SUCCESS,
   FORM_ERROR, 
   FORM_LOADING, 
   FILTER_FORM, 
   CLEAR_FILTER,
   DELETE_FORM , 
   PROGRAMS_SUCCESS, 
   INDICATOR_QUESTIONS_SUCCESS, 
   CREATE_FORM_SUCCESS, 
   FORM_SUCCESS,
   FORM_BUILD_ANSWER,
   CREATE_SUBMISSION_SUCCESS
  } from "../../constants/types";

export const getForms = (page) => (dispatch, getState) => {
  dispatch({ type: FORM_LOADING, });
  axios
    .get(`${appConstants.REACT_APP_BASE_URL}/form?page=${page}&pageBy=10`, tokenConfig(getState))
    .then((response) => {
      dispatch({ type: FORMS_SUCCESS, payload: response.data.data, });
    }).catch((error) => {
      if (error.message && error.response === undefined) {
        dispatch(setError(error.message, "ERR"));
        dispatch({type: FORM_ERROR, payload: error.message,});
      } else {
        dispatch(setError(error.response.data.message, error.response.status));
        dispatch({ type: FORM_ERROR, payload: error.response.data.message, });
      }
    });
};
export const filterForm=(query)=>(dispatch)=>{
  dispatch({ type: FILTER_FORM, payload: query})
}
export const clearFilter=()=>(dispatch)=>{
  dispatch({ type: CLEAR_FILTER })
}

export const deleteForm=(id)=> async (dispatch, getState)=>{
  try{
    const response = await axios.delete(`${appConstants.REACT_APP_BASE_URL}/form/${id}`,tokenConfig(getState))
    if(response.data.message==="Selected form has submissons, form cannot be deleted"){
      dispatch(setError(response.data.message, "ERR"))
    }else{
      dispatch({
        type: DELETE_FORM,
        payload: id
      })
      dispatch(setAlert(response.data))
    }
  }catch(error){
    if (error.message && error.response === undefined) {
      dispatch(setError(error.message, "ERR"));
      dispatch({type: FORM_ERROR, payload: error.message,});
    } else {
      dispatch(setError(error.response.data.message, error.response.status));
      dispatch({ type: FORM_ERROR, payload: error.response.data.message, });
    }
  } 
}

export const getPrograms=()=>(dispatch, getState)=>{
  dispatch({
    type: FORM_LOADING
  })
  axios.get(`${appConstants.REACT_APP_BASE_URL}/programs`,tokenConfig(getState)).then((response)=>{
    dispatch({
      type: PROGRAMS_SUCCESS,
      payload: response.data
    })
  }).catch((error)=>{
    console.log(error.message)
  })
}

export const getIndicatorQuestions=(id)=>(dispatch, getState)=>{
  axios.get(`${appConstants.REACT_APP_BASE_URL}/all_indicator_questions/${id}`,tokenConfig(getState)).then((response)=>{
    dispatch({
      type: INDICATOR_QUESTIONS_SUCCESS,
      payload: response.data
    })
  }).catch((error)=>{
    console.log(error.message)
  })
}

export const createForm=(formData, history)=>(dispatch, getState)=>{
  dispatch({
    type: FORM_LOADING
  })
  axios.post(`${appConstants.REACT_APP_BASE_URL}/form/`, formData, tokenConfig(getState)).then((response)=>{
    dispatch({
      type: CREATE_FORM_SUCCESS,
      payload: response.data
    })
    dispatch(setAlert(response.data))
    setTimeout(history.push(`/app/forms`), 2000)
  }).catch((error)=>{
    if (error.message && error.response === undefined) {
      dispatch(setError(error.message, "ERR"));
      dispatch({type: FORM_ERROR, payload: error.message,});
    } else {
      dispatch(setError(error.response.data.message, error.response.status));
      dispatch({ type: FORM_ERROR, payload: error.response.data.message, });
    }
  })
}

//get a form
export const getForm=(id)=>(dispatch, getState)=>{
  dispatch({
    type: FORM_LOADING
  })
  axios.get(`${appConstants.REACT_APP_BASE_URL}/form/${id}`,tokenConfig(getState)).then((res)=>{
    dispatch({
      type: FORM_SUCCESS,
      payload: res.data
    })
  }).catch((error)=>{
    if (error.message && error.response === undefined) {
      dispatch(setError(error.message, "ERR"));
      dispatch({type: FORM_ERROR, payload: error.message,});
    } else {
      dispatch(setError(error.response.data.message, error.response.status));
      dispatch({ type: FORM_ERROR, payload: error.response.data.message, });
    }
  })
}

export const formBuildAnswer=(payload)=>{
  return{
    type:FORM_BUILD_ANSWER,
    payload:payload
  }
}

export const createSubmission=(id, answers)=>(dispatch, getState)=>{
  dispatch({
    type: FORM_LOADING
  })
  axios.post(`${appConstants.REACT_APP_BASE_URL}/form/${id}/`, answers, tokenConfig(getState)).then((response)=>{
    dispatch({
      type: CREATE_SUBMISSION_SUCCESS,
      payload: response.data
    })
    dispatch(setAlert(response.data))
    window.setTimeout(() => {window.close() }, 2000)
  }).catch((error)=>{
    if (error.message && error.response === undefined) {
      dispatch(setError(error.message, "ERR"));
      dispatch({type: FORM_ERROR, payload: error.message,});
    } else {
      dispatch(setError(error.response.data.message, error.response.status));
      dispatch({ type: FORM_ERROR, payload: error.response.data.message, });
    }
  })
}
export const updateForm=(id,Data, history)=>(dispatch, getState)=>{
  dispatch({
    type: FORM_LOADING
  })
  axios.put(`${appConstants.REACT_APP_BASE_URL}/form/${id}/`, Data, tokenConfig(getState)).then((response)=>{
    dispatch({
      type: CREATE_FORM_SUCCESS,
      payload: response.data
    })
    dispatch(setAlert(response.data))
    setTimeout(history.push(`/app/forms`), 2000)
  }).catch((error)=>{
    if (error.message && error.response === undefined) {
      dispatch(setError(error.message, "ERR"));
      dispatch({type: FORM_ERROR, payload: error.message,});
    } else {
      dispatch(setError(error.response.data.message, error.response.status));
      dispatch({ type: FORM_ERROR, payload: error.response.data.message, });
    }
  })
}