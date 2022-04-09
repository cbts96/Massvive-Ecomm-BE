import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB-31NElFbmjta51sgAsecfkT0oUI7idc",
  authDomain: "ecommerce-mern-22928.firebaseapp.com",
  projectId: "ecommerce-mern-22928",
  storageBucket: "ecommerce-mern-22928.appspot.com",
  messagingSenderId: "359227148632",
  appId: "1:359227148632:web:08a33a15d1c5268efc7d2d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
