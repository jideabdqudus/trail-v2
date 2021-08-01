import { combineReducers } from "redux";
import auth from "./authReducer.js";
import alert from "./alert.js"

export default combineReducers({ auth, alert });