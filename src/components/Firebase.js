import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC4UdWZrxt5Sv0fsNcgk9MwZGzRdiYoO9Y",
  authDomain: "clone-d1c37.firebaseapp.com",
  databaseURL: "https://clone-d1c37.firebaseio.com",
  projectId: "clone-d1c37",
  storageBucket: "clone-d1c37.appspot.com",
  messagingSenderId: "111367033896",
  appId: "1:111367033896:web:6504ad8bbd49cc4775911d",
  measurementId: "G-Q2KK912BY7",
});

const auth = firebase.auth();

export { auth };
