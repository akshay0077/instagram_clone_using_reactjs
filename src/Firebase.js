import firebase from "firebase";

  const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyCWa9kFx7mljA9UZOOoPqm3U7vdVEsFAhg",
    authDomain: "instagram-clone-61b88.firebaseapp.com",
    databaseURL: "https://instagram-clone-61b88-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-61b88",
    storageBucket: "instagram-clone-61b88.appspot.com",
    messagingSenderId: "343329297187",
    appId: "1:343329297187:web:5f262c836db11f2802f296",
    measurementId: "G-5DYDJNBQTQ"
  });

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storege=firebase.storege();

  export  {db,auth,storege};