const initialState = JSON.parse(localStorage.getItem("user")) || {
  state: false,
  token: "",
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "login": {
      localStorage.setItem(
        "user",
        JSON.stringify({ state: true, token: payload })
      );
      return { state: true, token: payload };
    }
    case "logout": {
      localStorage.setItem("user", JSON.stringify({ state: false, token: "" }));
      return { state: false, token: "" };
    }
    default:
      return state;
  }
};
