import { LOGIN, LOGOUT } from "../types";

const initialState = {
  user: null,
  uid: null,
};

/*
    Any action related to Profile will go here.
*/

export default function authUserReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload,
        uid: payload.id,
      };
    case LOGOUT:
      localStorage.removeItem("auth");
      return {
        ...state,
        user: null,
        uid: null,
      };

    default:
      return { ...state };
  }
}
