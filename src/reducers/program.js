import { 
  BUDGET_AND_BENEFICIARIES, 
  GET_PROGRAMS, 
  GET_ALL_SDGS_INDICATORS, 
  LOADING_PROGRAMS, 
  LOADED_PROGRAMS, 
  PROGRAM_ERROR, 
  GET_INDICATORS_UNDER_SDGS, 
  CREATED_PROGRAM,
  FORM_REPORT_FOR_PROGRAM,
  CLEAR_REPORT
} from "../constants/types";

const initialState = {
  loading: false,
  budgetAndBeneficiaries: {},
  sdgsAndIndicators: [],
  indicatorsUnderSdgs: [],
  programs: [],
  report: [],
  error: null,
};

const program = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_PROGRAMS:
      return{
        ...state, 
        loading: true
      }
    case LOADED_PROGRAMS:
      return{
        ...state, 
        loading: false
      }
    case GET_ALL_SDGS_INDICATORS:
      return {
        ...state,
        loading: false,
        sdgsAndIndicators: action.payload.data 
      }
    case GET_INDICATORS_UNDER_SDGS:
      return{
        ...state,
        loading: false,
        indicatorsUnderSdgs: [...state.indicatorsUnderSdgs, action.payload.data]
      }
    case BUDGET_AND_BENEFICIARIES:
      return{
        ...state,
        loading: false,
        budgetAndBeneficiaries: action.payload.data
      }
    case GET_PROGRAMS:
      return{
        ...state,
        loading: false,
        programs: action.payload.data
      }
    case CREATED_PROGRAM:
      state.programs.unshift((action.payload.data))
      return{
        ...state, 
        loading: false,
        // programs: [...state.programs, action.payload.data]
      }
    case FORM_REPORT_FOR_PROGRAM:
      return {
        ...state,
        loading: false,
        report: action.payload.data
      }
    case CLEAR_REPORT:
      return {
        ...state, 
        loading: false,
        report: []
      }
    case PROGRAM_ERROR:
      return{
        ...state, 
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
};

export default program;