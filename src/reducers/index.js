import { combineReducers } from "redux";

import auth from "./authReducer.js";
import alert from "./alert.js"
import program from "./program.js"

export default combineReducers({ auth, alert, program });