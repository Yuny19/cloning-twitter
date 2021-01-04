import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import loginReducer from "./reducers/loginReducer";

const store = createStore(
  loginReducer,
  process.env.NODE_ENV !== "production" && composeWithDevTools()
);

export default store;
