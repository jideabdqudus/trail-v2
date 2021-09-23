import { SET_ERROR} from '../../constants/types.js';

const initialState = {
  msg: {},
  status: null,
};

const alert = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
      };
    default:
      return state;
  }
}

export default alert
