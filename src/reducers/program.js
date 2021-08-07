import { BUDGET_AND_BENEFICIARIES, GET_PROGRAMS, GET_ALL_SDGS_INDICATORS, LOADING_PROGRAMS, LOADED_PROGRAMS } from "../constants/types";

const initialState = {
  loading: false,
  budgetAndBeneficiaries: {},
  sdgsAndIndicators: [],
  programs: []
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
    default:
      return state;
  }
};

export default program;