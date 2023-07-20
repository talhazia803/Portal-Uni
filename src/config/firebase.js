import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA2jLSLrR88M-0jKeTZFJUceNavBFFiPKM",
    authDomain: "umwportal-4738f.firebaseapp.com",
    databaseURL: "https://umwportal-4738f-default-rtdb.firebaseio.com",
    projectId: "umwportal-4738f",
    storageBucket: "umwportal-4738f.appspot.com",
    messagingSenderId: "485678230681",
    appId: "1:485678230681:web:f27db79059294d6f085c08"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;