import {
  LOGIN,
  LOGIN_LOADER,
  LOGOUT,
  REGISTER_LOADER,
  RESET_PASSWORD,
} from "../types";

const initialState = {
  loading: false,
  loginLoading: false,
  resetPasswordLoading: false,
  user: null,
  uid: null,
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN: {
      return {
        ...state,
        user: payload,
        uid: payload.uid,
      };
    }

    case LOGOUT:
      localStorage.removeItem("auth");
      return {
        ...state,
        user: null,
        uid: null,
      };

    case REGISTER_LOADER:
      return {
        ...state,
        loading: payload,
      };
    case LOGIN_LOADER:
      return {
        ...state,
        loginLoading: payload,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        resetPasswordLoading: payload,
      };

    default:
      return {
        ...state,
      };
  }
}
