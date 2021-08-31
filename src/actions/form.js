import axios from "axios";


import { appConstants } from "../constants/environment.js";
import { tokenConfig } from "../helpers";
import { setError, setAlert } from "./alert";
import { FORMS_SUCCESS, FORM_ERROR, FORM_LOADING, FILTER_FORM, CLEAR_FILTER,DELETE_FORM , PROGRAMS_SUCCESS, INDICATOR_QUESTIONS_SUCCESS} from "../constants/types";

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
export const filterForm=(forms)=>(dispatch)=>{
  dispatch({ type: FILTER_FORM, payload: forms})
}
export const clearFilter=()=>(dispatch)=>{
  dispatch({ type: CLEAR_FILTER })
}

// export const deleteForm=(id)=>(dispatch, getState)=>{
//   axios.delete(`${appConstants.REACT_APP_BASE_URL}/form/${id}`,tokenConfig(getState))
//   .then((response)=>{
//     dispatch({
//       type: DELETE_FORM,
//       payload: id
//     })
//     dispatch(setError(response.data, "ERR"))
//   }).catch((error)=>{
//     if (error.message && error.response === undefined) {
//       dispatch(setError(error.message, "ERR"));
//       dispatch({type: FORM_ERROR, payload: error.message,});
//     } else {
//       dispatch(setError(error.response.data.message, error.response.status));
//       dispatch({ type: FORM_ERROR, payload: error.response.data.message, });
//     }
//   })
// }
export const deleteForm=(id)=> async (dispatch, getState)=>{
  try{
    const response=await axios.delete(`${appConstants.REACT_APP_BASE_URL}/form/${id}`,tokenConfig(getState))
    
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
