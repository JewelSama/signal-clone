// import * as firebase from "firebase"
import firebase from "firebase/compat/app"
// import {initializeApp} from "firebase/app"
import 'firebase/compat/firestore';
import "firebase/compat/auth"



const firebaseConfig = {
    apiKey: "AIzaSyAjpkfR_zFwphs8iQAW0DPjr8vvoP1phP8",
    authDomain: "signal-clone-76363.firebaseapp.com",
    projectId: "signal-clone-76363",
    storageBucket: "signal-clone-76363.appspot.com",
    messagingSenderId: "41030075225",
    appId: "1:41030075225:web:9e55ddb19738e5adcc8248"
};

let app;
if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth}