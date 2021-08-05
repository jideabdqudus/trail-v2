import { BUDGET_AND_BENEFICIARIES, GET_PROGRAMS } from "../constants/types";

const initialState = {
  loading: false,
  budgetAndBeneficiaries: {},
  programs: []
};

const program = (state = initialState, action) => {
  switch (action.type) {
    case BUDGET_AND_BENEFICIARIES:
      return{
        ...state,
        budgetAndBeneficiaries: action.payload.data
      }
    case GET_PROGRAMS:
      return{
        ...state,
        programs: action.payload.data
      }
    default:
      return state;
  }
};

export default program;