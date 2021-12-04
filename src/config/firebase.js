 // Import the functions you need from the SDKs you need
 import { getApps,initializeApp } from 'firebase/app'
 import { getAuth, 
          createUserWithEmailAndPassword,
          signInWithEmailAndPassword,
          GoogleAuthProvider,
          signInWithPopup,
          signOut } from "firebase/auth";


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

  export const createUser = async (email, password) => {
    let result =""
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password,)
    .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    console.log("create user success!!")
    result = "success"
    // return "success"
    })
    .catch((error) => {
      console.log(error.message,"===")
      result = "failed"
    // return "failed"
    });
    return result
    }
    

  export const login = async (email, password) => {
    let result2 = ""
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      result2 = "success"
  })
    .catch((error) => {
    console.log(error.message,"===")
    result2 = "failed"
  });
  return result2
}

export const google = async () =>{
const provider = new GoogleAuthProvider();
let result3 = ""
const auth = getAuth();
await signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log("user")
    result3 = "success"
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(errorMessage)
    result3 = "error"
    
  });

  return result3
}
