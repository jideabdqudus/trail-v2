import {
  FORMS_SUCCESS,
  FORM_ERROR,
  FORM_LOADING,
  FILTER_FORM,
  CLEAR_FILTER,
  DELETE_FORM,
  PROGRAMS_SUCCESS,
  INDICATOR_QUESTIONS_SUCCESS,
  CREATE_FORM_SUCCESS,
  FORM_SUCCESS,
  FORM_BUILD_ANSWER,
  DOWNLOAD_FORM_RAWDATA
} from "../../constants/types";

const initialState = {
  forms: [],
  loading: false,
  form: {},
  error: "",
  filtered: null,
  pagination: {},
  programs: [],
  indicatorQuestions: [],
  answers: {}
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
        filtered: null,
        pagination: action.payload.pagination,
      };
    case FILTER_FORM: 
      return{
        ...state,
        loading:false,
        filtered: state.forms.filter((form)=>{
          return  form.name.toLowerCase().includes(action.payload.toLowerCase())
        })
      }
    case CLEAR_FILTER: 
      return{
        ...state,
        filtered: null
      }
    case FORM_ERROR:
      return {
        ...state,
        forms: [],
        error: action.payload,
      };
      case DELETE_FORM: 
        return{
          ...state,
          loading:false,
          forms: state.forms.filter((form)=>{
            return form.id!== action.payload
          }),
          filtered: null, 
        };
      case PROGRAMS_SUCCESS: 
        return{
          ...state,
          loading: true,
          programs: action.payload.data

        }
      case INDICATOR_QUESTIONS_SUCCESS: 
        return{
          ...state,
          indicatorQuestions: action.payload.data
        }
      case CREATE_FORM_SUCCESS: 
        return {
          ...state,
          loading: false,
          form: action.payload.data
        }
      case FORM_SUCCESS: 
        return{
          ...state,
          loading: false,
          form: action.payload.data
        }
      case FORM_BUILD_ANSWER:
          return {
          ...state,
          answers: { ...state.answers, [action.payload.questionId]: action.payload },
        }
      case DOWNLOAD_FORM_RAWDATA:
      default:
        return state;
    }
};

export default form;
