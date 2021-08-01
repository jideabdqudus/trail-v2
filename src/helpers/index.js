import { toast } from "react-toastify";

export const regEx = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
);

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = token;
  }

  return config;
};
// validatePassword: (password) => {
//   const reg = new RegExp(
//     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
//   ).test(password);
//   return reg;
// },
export const toastify = {
  alertError: (message, duration) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: duration,
    });
  },

  alertSuccess: (message, duration) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: duration,
    });
  },

  alertWarning: (message, duration) => {
    toast.warning(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: duration,
    });
  },
};
