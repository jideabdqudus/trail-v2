import { toast } from "react-toastify";

export const regEx = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
);

export const validateString = (string)=>{
  //Check for Special Character in first letter of the string
  const stringify = String(string)
  const firstChar = stringify.charAt(0)
  // eslint-disable-next-line
  const format  = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1234567890]/
  return format.test(firstChar)
}

export const verifyString = (string) => {
  //Check for Special Character in first letter of the string
  const stringify = String(string)
  const firstChar = stringify.charAt(0)
  
  const format = /(?!-.&%$#)^[A-zA-Z]*((-|\s)*[_A-zA-Z])*$/g
  return format.test(firstChar)
}

export const validateNumbers = (value)=>{
  //Check for Special Character in first letter of the string
 	const stringify = String(value)
  const firstChar = stringify.charAt(0)
  // eslint-disable-next-line
  const format  = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?abcdefghijklmnopqrstuvwxyz~]/
  return format.test(firstChar)
}

export const validateNumbersAndZero = (value)=>{
  //Check for Special Character in first letter of the string
 	const stringify = String(value)
  const firstChar = stringify.charAt(0)
  // eslint-disable-next-line
  const format  = /[ `!@#$%^&*()_+0\-=\[\]{};':"\\|,.<>\/?abcdefghijklmnopqrstuvwxyz~]/
  return format.test(firstChar)
}

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.accessToken || localStorage.getItem("accessToken");

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers['accessToken'] = token;
  }
  return config;
};

export const validatePassword = (password) => {
  const reg = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
  ).test(password);
  return reg;
}

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

export const urlHelper = (string) =>{
  let arr = string.split("/")
  let token = arr[arr.length - 1]
  token = token.slice(26)
  console.log(token)
  return token  
}