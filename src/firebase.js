import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCoQj8rYnjgIQVsn9w_gmVDZf1MVV7CPcA",
    authDomain: "babbler-df9c9.firebaseapp.com",
    projectId: "babbler-df9c9",
    storageBucket: "babbler-df9c9.appspot.com",
    messagingSenderId: "658519480646",
    appId: "1:658519480646:web:c0c709a0b8afecb729ed47",
  })
  .auth();
