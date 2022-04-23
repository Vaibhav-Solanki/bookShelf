const initialState = JSON.parse(localStorage.getItem("user")) || {
  state: false,
  userName: "",
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "login": {
      localStorage.setItem(
        "user",
        JSON.stringify({ state: true, userName: payload })
      );
      return { state: true, userName: payload };
    }
    case "logout": {
      localStorage.setItem(
        "user",
        JSON.stringify({ state: false, userName: "" })
      );
      return { state: false, userName: "" };
    }
    default:
      return state;
  }
};
