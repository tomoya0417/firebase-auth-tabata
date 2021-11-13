 // Import the functions you need from the SDKs you need
 import { getApps,initializeApp } from 'firebase/app'
 import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";


 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: process.env.REACT_APP_API_KEY,
 authDomain: process.env.REACT_APP_AUTH_DOMAIN,
 databaseURL: process.env.REACT_APP_DATABASE_URL,
 projectId: process.env.REACT_APP_PROJECT_ID,
 storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
 messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
 appId: process.env.REACT_APP_APP_ID
};

 // Initialize Firebase
const apps = getApps
if (!apps.length) {
 initializeApp(firebaseConfig)
}

//const auth = getAuth();
//createUserWithEmailAndPassword(auth, email, password)
  //.then((userCredential) => {
    // Signed in
    //const user = userCredential.user;
    // ...
  //})
  //.catch((error) => {
    //const errorCode = error.code;
    //const errorMessage = error.message;
    // ..
  //});

  export const createUser = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password,)
    .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    console.log("create user success!!")
    return "success"
    })
    .catch((error) => {
      console.log(error.message)
    return "failed"
    });
    }

  export const login = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
  })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })};