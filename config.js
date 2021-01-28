import firebase from 'firebase';
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyCYfcGS1EIIr-ReASglJBtjfxJh57EFzus",
  authDomain: "barter-app-2c7da.firebaseapp.com",
  databaseURL: "https://barter-app-2c7da-default-rtdb.firebaseio.com",
  projectId: "barter-app-2c7da",
  storageBucket: "barter-app-2c7da.appspot.com",
  messagingSenderId: "219514110268",
  appId: "1:219514110268:web:216818cc52d85366241e39",
  measurementId: "G-FFD9SHXTHC"
};

  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore();