import {
  CREATE_FORM_SUCCESS,
  FORMS_SUCCESS,
  FORM_ERROR,
  DELETE_FORM,
  FORM_LOADING,
  FILTER_FORM,
  CLEAR_FILTER,
} from "../constants/types";

const initialState = {
  forms: [],
  loading: false,
  form: {},
  error: "",
  filtered: null,
  pagination: {},
};

const form = (state = initialState, action) => {
  switch (action.type) {
    case FORM_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FORMS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: true,
        forms: action.payload.data,
        pagination: action.payload.pagination,
      };
    case FILTER_FORM: return{
      ...state,
      filtered: state.forms.filter((form)=>{
        return  form.name.match()
      })
    }
    case CLEAR_FILTER: return{
      ...state,
      filtered: null
    }
    case FORM_ERROR:
      return {
        forms: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default form;
