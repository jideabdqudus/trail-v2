import { combineReducers } from "redux";
import auth from "./authReducer.js";
import alert from "./alert.js";
import program from "./program.js";
import form from "./form.js";
import builderType from "./builderType.js"
export default combineReducers({ auth, alert, program, form, builderType});
