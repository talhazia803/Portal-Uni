import {
  LOGIN,
  LOGIN_LOADER,
  LOGOUT,
  REGISTER_LOADER,
  RESET_PASSWORD,
} from "../types";
import firebase from "../../config/firebase";
export const signupLoader = (val) => async (dispatch) => {
  dispatch({
    type: REGISTER_LOADER,
    payload: val,
  });
};
export const LogInLoader = (val) => async (dispatch) => {
  dispatch({
    type: LOGIN_LOADER,
    payload: val,
  });
};

export const login = (loginData, onSuccess = () => {}, onError = () => {}) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_LOADER,
      payload: true,
    });
    firebase
      .auth()
      .signInWithEmailAndPassword(loginData.email, loginData.password)
      .then((data) => {
        firebase
          .firestore()
          .collection("users")
          .doc(data.user.uid)
          .onSnapshot((doc) => {
            const user = doc.data();
            if (user.blocked) {
              firebase.auth().signOut();
              alert("Your account has been blocked. Please contact the admin.");
            } else {
              dispatch({
                type: LOGIN,
                payload: { id: doc.id, ...user },
              });

              onSuccess();
            }
          });
        dispatch({
          type: LOGIN_LOADER,
          payload: false,
        });
      })
      .catch((error) => {
        alert(error.message);
        dispatch({
          type: LOGIN_LOADER,
          payload: false,
        });
        onError();
      });
  };
};

export const signUp = (payload, password, history) => async (dispatch) => {
  console.log(payload, password);
  dispatch(signupLoader(true));
  firebase
    .auth()
    .createUserWithEmailAndPassword(payload.email, password)
    .then((data) => {
      console.log(data,'talha')
      firebase
        .firestore()
        .collection("users")
        .doc(data.user.uid)
        .set({
          ...payload,
          createdAt: firebase.firestore.Timestamp.now(),
        })
        .then((res) => {
          dispatch(signupLoader(false));
          alert("Account Created Successfully");
          history.push("/auth/admin");
        })
        .catch((err) => {
          dispatch(signupLoader(false));
          alert(err.message, "danger");
        });
    });
};

export const forgetPassword = (email) => async (dispatch) => {
  dispatch({
    type: RESET_PASSWORD,
    payload: true,
  });
  try {
    await firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        dispatch({
          type: RESET_PASSWORD,
          payload: false,
        });
        alert("Check your email and reset your password");
      });
  } catch (error) {
    alert(error.message);
    dispatch({
      type: RESET_PASSWORD,
      payload: false,
    });
  }
};

export const logout = (onSuccess = () => {}) => {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then((data) => {
        dispatch({
          type: LOGOUT,
          uid: "",
          user: "",
          error: "",
        });
        onSuccess();
      })
      .catch((error) => {
        dispatch({
          type: "LOGOUT_FAIL",
          uid: "",
          error: error,
        });
      });
  };
};
