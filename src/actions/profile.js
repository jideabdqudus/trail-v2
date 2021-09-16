import axios from "axios";

import {GET_PROFILE,PROFILE_LOADING,PROFILE_UPDATE, PROFILE_ERROR} from "../constants/types"
import { appConstants } from "../constants/environment.js";
import { tokenConfig } from "../helpers";
import { setError, setAlert } from "./alert";

export const get_profile=(id)=>(dispatch, getState)=>{
    dispatch({
        type:PROFILE_LOADING
    })
    axios.get(`${appConstants.REACT_APP_BASE_URL}/user/${id}/`, tokenConfig(getState)).then((response)=>{
        dispatch({
            type:GET_PROFILE,
            payload: response.data
        })
    }).catch((error)=>{
        if (error.message && error.response === undefined) {
            dispatch(setError(error.message, "ERR"));
            dispatch({type: PROFILE_ERROR, payload: error.message,});
          } else {
            dispatch(setError(error.response.data.message, error.response.status));
            dispatch({ type: PROFILE_ERROR, payload: error.response.data.message, });
          }
    })

}
export const profile_update=(id, formData, history)=>(dispatch, getState)=>{
    dispatch({
        type: PROFILE_LOADING
    })
    let form = new FormData();
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });
    axios.post(`${appConstants.REACT_APP_BASE_URL}/user/${id}/`, form, tokenConfig(getState))
    .then((response)=>{
        dispatch(setAlert(response.data))
        dispatch({
            type: PROFILE_UPDATE,
            payload: response.data
        })
        history.push('/app/profile')
    }).catch((error)=>{
        if (error.message && error.response === undefined) {
            dispatch(setError(error.message, "ERR"));
            dispatch({type: PROFILE_ERROR, payload: error.message,});
          } else {
            dispatch(setError(error.response.data.message, error.response.status));
            dispatch({ type: PROFILE_ERROR, payload: error.response.data.message, });
          }
    })
}