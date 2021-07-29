const initialState = {
  profile: null,
  loading: false,
  error: null,
  message: null,
  token: localStorage.getItem("token"),
  isAuthenticated: false,
};


const auth = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default auth;