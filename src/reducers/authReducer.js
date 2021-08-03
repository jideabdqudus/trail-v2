import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, AUTH_ERROR, USER_LOADING, USER_LOADED } from "../constants/types";

const initialState = {
  user: null,
  loading: false,
  token: localStorage.getItem("token"),
  isAuthenticated: false,
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
        user: action.payload,
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.data.token);
      return {
        ...state,
        user: action.payload.data,
        loading: false,
        isAuthenticated: false,
      };
      case LOGIN_SUCCESS:
        localStorage.setItem("token", action.payload.data.token);
        return {
          ...state,
          user: action.payload.data,
          loading: false,
          isAuthenticated: true,
        };
    case AUTH_ERROR:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default auth;