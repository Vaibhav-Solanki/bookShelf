import { createStore, combineReducers } from "redux";
import loginReducer from "./Login/reducer";

const rootReducer = combineReducers({
  login: loginReducer,
});
let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
