// Root Reducer

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import authUserReducer from "./authUser";

export let rootReducer = combineReducers({
  auth: authReducer,
  authUser: authUserReducer,
});

export default rootReducer;
