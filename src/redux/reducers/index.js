import { combineReducers } from "redux";
import auth from "./auth.js";
import alert from "./alert.js";
import program from "./program.js";
import form from "./form.js";
import profile from "./profile"
export default combineReducers({ auth, alert, program, form, profile});
