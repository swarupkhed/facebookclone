import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPe0RKAHeb8Oc7YfDjauk2rt7L0LvYYkA",
    authDomain: "myfacebook-clone-app.firebaseapp.com",
    projectId: "myfacebook-clone-app",
    storageBucket: "myfacebook-clone-app.appspot.com",
    messagingSenderId: "612436407119",
    appId: "1:612436407119:web:6f100ed9a5d3e899388b3a",
    measurementId: "G-VSBE9WBT52"
  };
  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const db=firebaseapp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;