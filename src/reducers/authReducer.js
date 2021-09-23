import { 
  REGISTER_SUCCESS, 
  REGISTER_FAIL, 
  LOGIN_FAIL, 
  LOGIN_SUCCESS, 
  LOGOUT_SUCCESS, 
  AUTH_ERROR, 
  USER_LOADING, 
  USER_LOADED,
  VALIDATION_ERROR,
  VALIDATION_SUCCESS,
  FORGOT_PASSWORD
} from "../constants/types";
const initialState = {
  user: null,
  loading: false,
  accessToken: localStorage.getItem("accessToken"),
  isAuthenticated: false,
  validation:null,
};
const auth = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload.data,
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("accessToken", action.payload.data.accessToken);
      localStorage.setItem("id", action.payload.data.id);
      localStorage.setItem("email", action.payload.data.email);
      return {
        ...state,
        user: action.payload.data,
        loading: false,
        accessToken: null, 
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("accessToken", action.payload.data.accessToken);
      localStorage.setItem("id", action.payload.data.id);
      localStorage.setItem("email", action.payload.data.email);
      return {
        ...state,
        user: action.payload.data,
        loading: false,
        accessToken: action.payload.data.accessToken,
        isAuthenticated: true,
      };
    case VALIDATION_SUCCESS:
      return {
        ...state,
        validation: action.payload,
        loading: false,
      };
    case VALIDATION_ERROR:
      return {
        ...state,
        validation: action.payload,
        loading: false,
      }; 
    case AUTH_ERROR:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      localStorage.removeItem('accessToken');
      localStorage.removeItem('id');
      localStorage.removeItem('email');
      return {
        ...state,
        user: null,
        accessToken: null,
        isAuthenticated: false,
        loading: false,
      };
      case FORGOT_PASSWORD:
    default:
      return state;
  }
};
export default auth;