export const LOGIN = "login";
export const LOGOUT = "logout";

export const loginLoading = () => {
  return { type: LOGIN_LOADING };
};

export const loginSuccess = (payload) => {
  return { type: LOGIN, payload: payload };
};

export const LogoutSuccess = () => {
  return { type: LOGOUT };
};
